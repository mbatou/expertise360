import Link from "next/link";
import { logoutAdmin } from "@/app/actions/articles";
import { ArticleEditor } from "@/components/admin/ArticleEditor";
import { ArticleRowActions } from "@/components/admin/ArticleRowActions";
import { LinkedInForm } from "@/components/admin/LinkedInForm";
import { LoginForm } from "@/components/admin/LoginForm";
import { Logo } from "@/components/ui/Logo";
import { getAllArticles, getArticleById, type Article } from "@/lib/articles";
import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";

// Contenu par session (cookie) : jamais mis en cache.
export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" });

function formatDate(value: string | null): string {
  return value ? dateFormatter.format(new Date(value)) : "—";
}

function StatusChip({ status }: { status: Article["status"] }) {
  return status === "published" ? (
    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
      Publié
    </span>
  ) : (
    <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-semibold text-ink">
      Brouillon
    </span>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ panel?: string; edit?: string }>;
}) {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return (
      <main className="flex min-h-svh flex-col items-center justify-center gap-8 px-4">
        <Logo />
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-md ring-1 ring-navy/5">
          <h1 className="font-display mb-6 text-xl font-semibold">Backoffice</h1>
          {isAdminConfigured() ? (
            <LoginForm />
          ) : (
            <p className="text-sm leading-relaxed text-slate">
              Backoffice non configuré : renseignez <code>ADMIN_PASSWORD</code> et{" "}
              <code>AUTH_SECRET</code> dans l&apos;environnement.
            </p>
          )}
        </div>
      </main>
    );
  }

  const { panel, edit } = await searchParams;
  const [articles, editing] = await Promise.all([
    getAllArticles(),
    edit ? getArticleById(edit) : Promise.resolve(null),
  ]);

  const activePanel = editing ? "editor" : panel === "nouvel-article" ? "editor" : panel;

  const tabs = [
    { label: "Publications", href: "/admin", active: !activePanel },
    { label: "Nouvel article", href: "/admin?panel=nouvel-article", active: activePanel === "editor" },
    { label: "Ajouter un post LinkedIn", href: "/admin?panel=linkedin", active: activePanel === "linkedin" },
  ];

  return (
    <>
      <header className="bg-navy text-white">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-semibold tracking-wider text-gold-soft uppercase">
              Backoffice
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/articles"
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold-soft"
            >
              Voir le site
            </Link>
            <form action={logoutAdmin}>
              <button
                type="submit"
                className="rounded-full border border-white/25 px-4 py-1.5 text-sm font-semibold transition-colors hover:border-gold hover:text-gold-soft"
              >
                Se déconnecter
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <nav aria-label="Sections du backoffice" className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={tab.active ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                tab.active ? "bg-navy text-white" : "bg-white text-ink ring-1 ring-navy/10 hover:ring-navy/30"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {activePanel === "editor" ? (
          <section className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-navy/5 sm:p-8">
            <h1 className="font-display mb-6 text-xl font-semibold">
              {editing ? `Modifier — ${editing.title}` : "Nouvel article"}
            </h1>
            <ArticleEditor article={editing ?? undefined} />
          </section>
        ) : activePanel === "linkedin" ? (
          <section className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-navy/5 sm:p-8">
            <h1 className="font-display mb-6 text-xl font-semibold">Ajouter un post LinkedIn</h1>
            <LinkedInForm />
          </section>
        ) : (
          <section>
            <h1 className="font-display mb-6 text-xl font-semibold">
              Publications ({articles.length})
            </h1>
            {articles.length === 0 ? (
              <p className="rounded-2xl bg-white p-8 text-sm leading-relaxed text-slate ring-1 ring-navy/5">
                Aucune publication pour l&apos;instant. Créez un article ou ajoutez un post
                LinkedIn avec les onglets ci-dessus.
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {articles.map((article) => (
                  <li
                    key={article.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 ring-1 ring-navy/5 sm:px-6"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-semibold text-ink">
                          {article.type === "linkedin" ? "LinkedIn" : "Article"}
                        </span>
                        <StatusChip status={article.status} />
                        <span className="text-xs text-slate">{formatDate(article.published_at)}</span>
                      </div>
                      <p className="mt-1.5 truncate font-semibold">{article.title}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {article.type === "article" && (
                        <>
                          {article.status === "published" && article.slug && (
                            <Link
                              href={`/articles/${article.slug}`}
                              className="rounded-full border border-navy/20 px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-navy"
                            >
                              Voir
                            </Link>
                          )}
                          <Link
                            href={`/admin?edit=${article.id}`}
                            className="rounded-full border border-navy/20 px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-navy"
                          >
                            Modifier
                          </Link>
                        </>
                      )}
                      <ArticleRowActions article={article} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>
    </>
  );
}

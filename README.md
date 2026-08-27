# Expertise 360 — Site vitrine

Site one-page du cabinet de conseil financier **Expertise 360** (Dakar) : stratégie, risque, financement, formation. Reconstruction complète sur un socle technique possédé et maintenable.

- **Stack** : Next.js (App Router, SSG) · TypeScript strict · Tailwind CSS 4 · Postgres/Neon via Vercel Marketplace (leads + articles) · Resend (notifications) · lucide-react · next/font (Fraunces + Inter)
- **Design** : palette navy + or exclusivement, pastilles d'icônes or, alternance de fonds clairs/sombres, animations douces respectant `prefers-reduced-motion`.

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis renseigner les valeurs
npm run dev                  # http://localhost:3000
```

Sans `.env.local`, le site fonctionne entièrement ; seul l'envoi du formulaire renvoie une erreur propre avec l'e-mail de repli (`contact@expert-360.com`).

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `DATABASE_URL` | Chaîne de connexion Postgres — injectée automatiquement par Vercel quand la base Neon est connectée au projet (Storage → Connect Database) |
| `ADMIN_PASSWORD` | Mot de passe du backoffice `/admin` (articles & posts LinkedIn) |
| `AUTH_SECRET` | Secret de signature du cookie de session admin (`openssl rand -base64 32`) |
| `RESEND_API_KEY` | Clé API Resend pour la notification e-mail des leads |
| `CONTACT_NOTIFICATION_EMAIL` | Adresse qui reçoit les notifications (ex. `contact@expert-360.com`) |
| `CONTACT_FROM_EMAIL` | Expéditeur (domaine vérifié dans Resend) |

## Base de données (Neon via Vercel)

1. Dans Vercel : projet → **Storage** → **Connect Database** → choisir (ou créer) une base **Neon**. `DATABASE_URL` est injectée automatiquement dans le projet.
2. Exécuter les migrations `db/migrations/` dans l'ordre (SQL Editor du dashboard Neon, ou `psql "$DATABASE_URL" -f db/migrations/000X_….sql`) :
   - `0001_create_leads.sql` — table `leads` (formulaire de contact)
   - `0002_create_articles.sql` — table `articles` (page Articles & backoffice)

La base n'est jamais exposée au navigateur : lectures et écritures passent exclusivement par le serveur Next.js.

## Articles & backoffice

- **Public** : `/articles` liste les publications (articles natifs + posts LinkedIn embarqués via le lecteur officiel `linkedin.com/embed` — aucun scraping), `/articles/[slug]` affiche un article (markdown → HTML, JSON-LD `Article`). ISR 5 min + `revalidatePath` à chaque action admin (publication visible immédiatement).
- **Backoffice `/admin`** (noindex, `disallow` robots) : connexion par mot de passe (`ADMIN_PASSWORD`, session cookie httpOnly signée HMAC avec `AUTH_SECRET`, 7 jours, rate-limit sur le login). Rédaction d'articles en markdown avec aperçu, brouillon/publication, ajout d'un post LinkedIn en collant son URL publique (aperçu embed immédiat).

## Formulaire de contact

`components/ContactForm.tsx` (client) → Server Action `app/actions/contact.ts` :
validation **zod** côté serveur → insertion Postgres → e-mail Resend (non bloquant) → état succès/erreur affiché et annoncé (`role="status"`, `aria-live`). Honeypot anti-spam + rate-limit en mémoire par IP (5 requêtes / 10 min, best-effort en serverless).

**Test réel avant mise en production** : soumettre le formulaire, vérifier la ligne dans `leads` et la réception de l'e-mail.

## Contenu

Tout le contenu vit dans `/content` (modules TypeScript typés, icônes Lucide référencées par nom — prêt à migrer vers un CMS sans refonte). La source de vérité est `Expertise360_Contenu_Reconstruction.md` (racine du repo) : le texte en est repris verbatim.

> **Assets à déposer dans `/public`** (inventaire §11) : `djibril-mbengue.jpg` et `cv-djibril-mbengue.pdf` — puis renseigner `photo` et `cvUrl` dans `content/team.ts` (`founderCard`). En attendant, l'avatar à initiales s'affiche et le lien CV est masqué. Les CV des trois autres consultants sont « à venir ».

## SEO & accessibilité

- Metadata complètes (title, description, canonical, Open Graph, Twitter card), image OG 1200×630 générée (`app/opengraph-image.tsx`), favicon `.ico` + `.svg` + apple-touch-icon, `theme-color` navy.
- JSON-LD `FinancialService` (Dakar, Afrique de l'Ouest, fondateur).
- `sitemap.xml` et `robots.txt` générés.
- HTML sémantique, skip-link, navigation clavier complète, menu mobile accessible (`aria-expanded`, fermeture Échap), labels associés à chaque champ, contrastes AA, `prefers-reduced-motion` respecté, aucun débordement à 320 px.

Le favicon `.ico` se régénère avec `node scripts/generate-favicon.mjs`.

## Déploiement (Vercel)

1. Importer le repo dans Vercel (framework auto-détecté : Next.js).
2. Renseigner les variables d'environnement ci-dessus (Production + Preview).
3. Déployer. Le site est intégralement statique (SSG) ; seule la Server Action du formulaire s'exécute côté serveur.
4. Brancher le domaine `expert-360.com` (et rediriger `www`).

## Structure

```
app/            layout (fonts, métadonnées, JSON-LD, skip-link), page, actions,
                sitemap, robots, opengraph-image, icônes
components/     sections (Header, Hero, Stats, Services, ValueProps, FounderCard,
                Team, Sectors, Method, Contact, ContactForm, Footer, MobileNav)
components/ui/  Section, IconBadge, Button, Tag, Avatar, Reveal, registre d'icônes
content/        contenu typé (site, services, valueProps, team, sectors, method,
                stats, contact, footer)
lib/            schema zod, pool Postgres (serveur), rate-limit, articles,
                linkedin (embed), admin-auth (session backoffice)
db/             migrations SQL (leads, articles)
```

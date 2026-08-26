import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Rendu markdown des articles (react-markdown : pas de HTML brut interprété,
 * donc pas d'injection). Styles typographiques navy/or via la classe prose-*
 * maison (globals.css n'embarque pas @tailwindcss/typography — styles ciblés
 * ci-dessous via des sélecteurs descendants).
 */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children: linkChildren }) => (
            <a href={href} rel="noopener noreferrer" target="_blank">
              {linkChildren}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

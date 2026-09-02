import type { ReactNode } from 'react';
import { config } from './legal/config';
import { routes } from './routes';
import './site.css';

type PageProps = {
  children: ReactNode;
  /** Rota da página atual, para marcar o item ativo na navegação. */
  current?: (typeof routes)[keyof typeof routes];
};

export function Page({ children, current }: PageProps) {
  return (
    <>
      <header className="SiteHeader">
        <div className="SiteHeaderInner">
          <a className="SiteBrand" href={routes.home}>
            {config.appName}
          </a>
          <nav className="SiteNav" aria-label="Documentos legais">
            <a
              href={routes.privacy}
              aria-current={current === routes.privacy ? 'page' : undefined}
            >
              Política de Privacidade
            </a>
            <a
              href={routes.terms}
              aria-current={current === routes.terms ? 'page' : undefined}
            >
              Termos de Serviço
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="SiteFooter">
        <div className="SiteFooterInner">
          <span>
            © {new Date().getFullYear()} {config.developer}
          </span>
          <span>
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </span>
        </div>
      </footer>
    </>
  );
}

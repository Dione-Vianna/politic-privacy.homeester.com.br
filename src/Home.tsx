import { config } from './legal/config';
import { routes } from './routes';

export function Home() {
  return (
    <div className="Home">
      <h1 className="HomeTitle">Documentos legais</h1>
      <p className="HomeLead">
        Política de Privacidade e Termos de Serviço do Home Care, operado por{' '}
        {config.appName}. Ao usar o aplicativo você concorda com os dois
        documentos abaixo.
      </p>

      <ul className="HomeList">
        <li>
          <a className="HomeCard" href={routes.privacy}>
            <h2 className="HomeCardTitle">Política de Privacidade</h2>
            <p className="HomeCardText">
              Quais dados coletamos, por que coletamos, com quem compartilhamos
              e como você exerce seus direitos.
            </p>
          </a>
        </li>
        <li>
          <a className="HomeCard" href={routes.terms}>
            <h2 className="HomeCardTitle">Termos de Serviço</h2>
            <p className="HomeCardText">
              As regras de uso do aplicativo, limites de responsabilidade e
              propriedade intelectual.
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
}

import { Page } from './Page';
import { Home } from './Home';
import { Privacy, Terms } from './legal';
import { resolveRoute, routes } from './routes';

export function App({ url }: { url: string }) {
  const route = resolveRoute(url);

  return (
    <Page current={route}>
      {route === routes.privacy ? (
        <Privacy />
      ) : route === routes.terms ? (
        <Terms />
      ) : (
        <Home />
      )}
    </Page>
  );
}

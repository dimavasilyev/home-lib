import { GlobalStateProvider } from '../components/providers/global-state-provider';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;

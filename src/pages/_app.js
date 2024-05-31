import NavbarLayout from '../sections/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <NavbarLayout>
      <Component {...pageProps} />
    </NavbarLayout>
  );
}

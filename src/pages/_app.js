import { ToastContainer } from 'react-toastify';
import NavbarLayout from '../sections/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <NavbarLayout>
      <ToastContainer />
      <Component {...pageProps} />
    </NavbarLayout>
  );
}

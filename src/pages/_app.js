
import { ToastContainer } from 'react-toastify';
import NavbarLayout from '../sections/layout';
import '@/styles/globals.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/wrapped') {
    return (
      <>
        <ToastContainer />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <NavbarLayout>
      <ToastContainer />
      <Component {...pageProps} />
    </NavbarLayout>
  );
}

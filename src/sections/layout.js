import WCSNavbar from './Navbar';
import WCSFooter from './Footer';

export default function NavbarLayout({ children }) {
  return (
    <div>
      <WCSNavbar />
      {children}
      <WCSFooter />
    </div>
  );
}

import WCSNavbar from './Navbar';

export default function NavbarLayout({ children }) {
  return (
    <div>
      <WCSNavbar />
      {children}
    </div>
  );
}

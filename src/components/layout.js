import WCSNavbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <WCSNavbar />
      {children}
    </div>
  );
};

export default Layout;

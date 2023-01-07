import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-80screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

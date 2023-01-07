import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="p-4 my-4 rounded-xl xl:ml-80 bg-blue-gray-300">
        <Header />
        <div className="min-h-[80vh]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

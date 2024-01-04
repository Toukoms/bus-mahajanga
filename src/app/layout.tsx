import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="px-8 pt-3 pb-2 flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

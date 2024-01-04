import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-8 mt-3 mb-2 flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

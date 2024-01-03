import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="mx-8 mt-3 mb-2 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

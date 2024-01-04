import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="flex justify-between items-center px-8 md:px-8 pt-4 pb-3 bg-primary">
      <Link to="/" className="text-3xl md:text-4xl font-bold">
        BusMJ
      </Link>

      <nav className="items-center gap-4 text-lg font-semibold hidden md:flex">
        <Link
          to="/search"
          className="hover:border-b border-foreground mb-[0.2px]"
        >
          Chercher des bus
        </Link>
        <Link to="/bus" className="hover:border-b border-foreground mb-[0.2px]">
          Tous les bus
        </Link>
      </nav>

      <button
        className="bg-transparent outline-none cursor-pointer md:hidden"
        onClick={toggleOpen}
      >
        <div id="menu-icon" />
      </button>

      <nav
        className={`absolute top-0 left-1/2 w-1/2 h-[100dvh] flex md:hidden flex-col gap-4 px-4 pt-20 text-xl font-semibold transition-all duration-300 bg-yellow-400 ${
          !open ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <button
          className="bg-transparent outline-none cursor-pointer absolute top-6 right-6 block md:hidden"
          onClick={toggleOpen}
        >
          <div id="closed-icon" />
        </button>
        <Link
          to="/search"
          onClick={toggleOpen}
          className="hover:border-b border-foreground mb-[0.2px]"
        >
          Chercher des bus
        </Link>
        <Link
          to="/bus"
          onClick={toggleOpen}
          className="hover:border-b border-foreground mb-[0.2px]"
        >
          Tous les bus
        </Link>
      </nav>
    </header>
  );
};

export default Header;

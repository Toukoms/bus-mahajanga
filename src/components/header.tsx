import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 md:px-8 pt-4 pb-3 bg-primary">
      <Link to="/" className="text-3xl md:text-4xl font-bold">
        BusMJ
      </Link>

      <nav className="flex items-center gap-4 text-lg font-semibold">
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
    </header>
  );
};

export default Header;

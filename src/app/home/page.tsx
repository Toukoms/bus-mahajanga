import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-between items-center h-[32rem] gap-4 px-32 py-24 w-[100vw-3rem]">
      <div className="max-w-xl flex flex-col gap-4">
        <h1 className="text-3xl">
          Bienvenu sur <b>BusMj</b>
        </h1>
        <p>
          Cette un plateforme web qui vous permettra de trouver les bus à
          prendre à Mahajanga (Madagascar). Vous pouvez aussi trouver la liste
          de tous les bus à Mahajanga en cliquant{" "}
          <Link
            to="/bus"
            className="underline text-blue-600 dark:text-slate-400"
          >
            ici
          </Link>
          .
        </p>
        <Link
          to="/bus"
          className="w-fit my-8 bg-blue-600 text-white px-4 py-2 text-lg rounded-full font-semibold"
        >
          Chercher des Bus
        </Link>
      </div>
      <div className="relative w-full h-96">
        <img
          src="/assets/bus.png"
          alt=" "
          className="absolute top-0 left-0 w-full h-full object-cover object-left"
        />
      </div>
    </div>
  );
};

export default HomePage;

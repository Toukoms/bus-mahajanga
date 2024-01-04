import { getAllStop, getBus } from "bus-mj";
import Input from "../../components/ui/input";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export async function searchLoader() {
  const stops = await getAllStop();
  return { stops };
}

const SearchPage = () => {
  const { stops } = useLoaderData() as Dict;
  const [bus, setBus] = useState<Dict[] | null>(null);
  const [data, setData] = useState({
    start: "",
    end: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await getBus(data.start, data.end);
    if (result) setBus(result);
  };

  return (
    <div className="mt-8">
      <h1 className="text-center text-4xl font-semibold mb-4">
        Trouver les bus de votre destination
      </h1>
      <div className="flex flex-col md:flex-row justify-center w-full gap-8 p-8">
        <form
          method="post"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            fieldName={"Départ"}
            name="start"
            datalist={stops as string[]}
            onChange={handleChange}
            defaultValue={data.start}
          />
          <Input
            fieldName={"Arrivé"}
            name="end"
            datalist={stops as string[]}
            onChange={handleChange}
            defaultValue={data.end}
          />
          <button
            type="submit"
            className="bg-blue-500 self-center md:self-start px-8 py-3 rounded-md w-fit font-semibold hover:bg-blue-400 active:bg-blue-300"
          >
            Chercher
          </button>
        </form>
        <div className="flex-1 flex justify-center items-center gap-4 bg-white/40 dark:bg-slate-600/40 flex-wrap rounded-sm w-full min-h-48 py-8 md:py-2 px-4">
          {bus !== null ? (
            bus.length !== 0 ? (
              bus.map((b) => (
                <div
                  key={b["BUS_ID"] as string}
                  className={`uppercase text-xl p-4 border w-28 h-20 flex justify-center items-center rounded-md ${
                    b["BUS_PLAQUE"] === "rouge"
                      ? "text-red-400 border-red-400"
                      : b["BUS_PLAQUE"] === "bleu"
                      ? "text-blue-400 border-blue-400"
                      : "border-foreground"
                  }`}
                >
                  {b["BUS_NAME"] as string}
                </div>
              ))
            ) : (
              <p className="text-lg">No Bus found 🙃</p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

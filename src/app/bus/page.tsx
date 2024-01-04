import { getAllBus } from "bus-mj";
import { useLoaderData } from "react-router-dom";

export async function busLoader() {
  const bus = (await getAllBus()) as Dict[];
  return { bus };
}

const BusPage = () => {
  const data: Dict = useLoaderData() as Dict;
  const bus: Dict[] = data.bus as Dict[];

  return (
    <div className="mt-8 md:mx-20">
      <h1 className="text-center text-4xl font-semibold mb-4">
        Liste de tous les bus à Mahajanga
      </h1>
      <div className="flex justify-center gap-4 flex-wrap my-8">
        {bus ? (
          bus.map((b) => (
            <div
              key={b["BUS_ID"] as string}
              className={`uppercase text-xl md:text-2xl md:p-8 border w-28 md:w-48 h-20 md:h-32 flex justify-center items-center rounded-xl ${
                (b["BUS_ID"] as number) === 70
                  ? "text-red-400 border-red-400"
                  : (b["BUS_ID"] as number) === 71
                  ? "text-blue-400 border-blue-400"
                  : "border-foreground"
              }`}
            >
              {b["BUS_NAME"] as string}
            </div>
          ))
        ) : (
          <div>No bus</div>
        )}
      </div>
    </div>
  );
};

export default BusPage;

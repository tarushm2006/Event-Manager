import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <main className="bg-black text-white">
      {data.map((ev) => (
        <Link
          key={ev.id}
          href={`/events/${ev.id}`}
          className="grid grid-rows-2 content-center md:grid-rows-3 h-screen place-items-center col-span-1"
        >
          <div className="transition-shadow duration-500 ease-in-out shadow-2xl hover:shadow-slate-50">
            <Image
              width="300"
              height="300"
              src={ev.image}
              className="rounded-md h-64 w-78 translate-y-10"
            />
          </div>
          <div className="transition-all duration-500 hover:bg-[#413F42] rounded-xl text-2xl text-left -translate-y-4">
            <h1 className=" font-bold p-5">{ev.title}</h1>
          </div>
          <div className="text-center flex flex-col justify-center -translate-y-32 lg:-translate-y-40">
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </main>
  );
};

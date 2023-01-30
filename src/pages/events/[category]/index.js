import Image from "next/image";
import Link from "next/link";

const EventCityPage = ({ data, pageName }) => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl -translate-y-50 p-5">
          Events in {pageName}
        </h1>
      </div>
      <div className="">
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            className="grid grid-rows-2 content-center md:grid-rows-3 h-1/2 place-items-center col-span-1"
          >
            <div className="transition-shadow duration-500 ease-in-out shadow-2xl hover:shadow-slate-50">
              <Image
                width="300"
                height="300"
                src={ev.image}
                className="rounded-md h-64 w-78 translate-y-10"
              />
            </div>
            <div className="-transition-all duration-500 hover:bg-[#413F42] rounded-xl text-2xl text-left -translate-y-24 md:-translate-y-4">
              <h2 className="p-5">{ev.title}</h2>
            </div>
            <div className="text-center flex flex-col justify-center -translate-y-32 lg:-translate-y-40 ">
              <p>{ev.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventCityPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        category: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.category;
  const { allEvents } = await import("../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return {
    props: { data, pageName: id },
  };
}

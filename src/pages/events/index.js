import Image from "next/image";
import Link from "next/link";

const EventPage = ({ data }) => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl -translate-y-50 p-5">Events</h1>
      </div>
      <div>
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.id}`}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await import("../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}

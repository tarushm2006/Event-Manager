import Image from "next/image";

const EventCategory = ({ data }) => {
  return (
    <div className="bg-black text-white grid grid-rows-2 content-center md:grid-rows-3 h-1/2 place-items-center col-span-1">
      <div className="transition-shadow duration-500 ease-in-out shadow-2xl hover:shadow-slate-50">
        <Image
          width="300"
          height="300"
          src={data.image}
          className="rounded-md h-64 w-78 translate-y-10"
        />
      </div>
      <div className="rounded-xl text-2xl text-left -translate-y-24 md:-translate-y-4">
        <h2 className="p-5">{data.title}</h2>
      </div>
      <div className="text-center flex flex-col justify-center -translate-y-32 lg:-translate-y-40 ">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default EventCategory;

export async function getStaticPaths() {
  const data = await import("../../data/data.json");
  const allEvents = data.allEvents;
  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        category: ev.city,
        id: ev.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("../../data/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);
  return {
    props: { data: eventData },
  };
}

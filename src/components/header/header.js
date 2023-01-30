import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-[#03001C] to-[#61876E] text-white w-full h-24 md:h-28 lg:h-52 text-right flex-col">
      <Image
        width="100"
        height="100"
        src="./vercel.svg"
        className="translate-y-10 translate-x-2 lg:translate-x-10 lg:translate-y-20 w-2/12"
      />
      <nav>
        <img />
        <Link href="/" className="inline-block mx-1 md:mx-3 my-5 lg:text-2xl">
          Home
        </Link>
        <Link href="/events" className="mx-1 md:mx-3 my-5 lg:text-2xl">
          Events
        </Link>
        <Link href="/about" className=" mx-1 md:mx-3 my-5 lg:text-2xl">
          About us
        </Link>
      </nav>
    </header>
  );
};

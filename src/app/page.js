import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-between items-center px-4 py-48">
      <div className="md:hidden z-10 flex flex-col w-full h-full items-center justify-between text-sm">
        <a href="https://instagram.com">
          <Image
            src="/instagram.svg"
            alt="instagram link"
            width={120}
            height={36}
            priority
          />
        </a>
        <a href="https://facebook.com">
          <Image
            src="/facebook.svg"
            alt="facebook link"
            width={120}
            height={36}
            priority
          />
        </a>
      </div>
      <div className="hidden md:flex z-10 flex-col w-full h-full items-center justify-center align-middle font-sans text-sm lg:flex text-white">
        mobile only
      </div>
    </main>
  );
}

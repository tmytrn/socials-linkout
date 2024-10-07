import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col justify-between items-center px-4 py-24 overflow-hidden bg-amazon bg-cover bg-center">
      <div className="fixed w-full flex flex-col items-center align middle justify-center top-12">
        <Image
          src="/amazon.svg"
          alt="fox logo"
          width={100}
          height={36}
          priority
        />
      </div>
      <div className=" fixed md:hidden z-10 flex flex-col w-full h-full items-center justify-center text-sm overflow-hidden top-0">
        <a
          href="https://www.instagram.com/ar/1200719724315135/"
          className="p-12">
          <Image
            src="/instagram.svg"
            alt="instagram link"
            width={120}
            height={36}
            priority
          />
        </a>
        <a
          href="https://www.facebook.com/fbcameraeffects/tryit/1200719724315135/"
          className="p-12">
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

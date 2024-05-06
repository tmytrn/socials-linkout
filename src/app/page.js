import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-between items-center px-4 py-48">
      <div className="z-10 flex flex-col w-full h-full items-center justify-between font-mono text-sm lg:flex">
        <a href="https://instagram.com">
          <Image
            src="/instagram.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={120}
            height={36}
            priority
          />
        </a>
        <a href="https://facebook.com">
          <Image
            src="/facebook.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={120}
            height={36}
            priority
          />
        </a>
      </div>
    </main>
  );
}

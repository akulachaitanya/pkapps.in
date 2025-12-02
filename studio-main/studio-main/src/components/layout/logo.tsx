import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/peacock-logo.png"
      alt="Pallavi Krishna Apps Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/metube.svg" height={50} width={50} alt="Logo" />
      <p className="text-2xl font-bold tracking-tight">MeTube2</p>
    </div>
  );
}

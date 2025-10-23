import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative py-5 overflow-hidden">
      <Image
        src="/banner.png"
        alt="banner"
        width={1600}
        height={600}
        className="w-full h-auto rounded-2xl shadow-2xl"
        priority
      />
    </div>
  );
}


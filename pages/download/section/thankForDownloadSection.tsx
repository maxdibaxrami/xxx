import { Image } from "@heroui/image";

 const ThankForDownloadSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center flex-col">
      {/* Image as background */}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>

      {/* Content */}
      <div className="relative flex gap-10 items-center flex-col mb-14 mt-12 px-4">
        <Image alt="HeroUI hero Image" src="/gif3.gif" width={600} height={400} />

        <h1 className="text-white font-semibold sm:text-xl text-2xl md:text-4xl lg:text-6xl text-center">
          Thanks For Download!
        </h1>

        <h6 className="text-white/70 text-lg md:text-xl lg:text-2xl text-center font-semibold">
          The most atmospheric sounds, the most enjoyable gameplay, with the ability to connect to toys
        </h6>
      </div>
    </section>
  );
};

export default ThankForDownloadSection

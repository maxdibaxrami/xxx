import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

const IntroSection = () => {
    return <section style={{marginTop:"-60px", maxHeight:"1100px"}} className="relative isolate flex pb-8 flex-col items-center justify-end px-6 lg:px-8 h-screen">
    {/* Background image and gradient */}
    <div className="sm:absolute -z-10 w-screen h-full top-0 flex items-center justify-center">
      <Image
        alt="HeroUI hero Image"
        src="/mainSectionBackground.jpeg"
        radius="none"
        className="h-full w-full scale-[1.2]"
        style={{
          maskImage: "linear-gradient(180deg, #D9D9D9 -12.22%, rgba(209, 209, 209, 0) -1.78%, #ADADAD 42.7%, rgba(131, 131, 131, 0) 95.47%, rgba(115, 115, 115, 0) 116%)",
          WebkitMaskImage: "linear-gradient(180deg, #D9D9D9 -12.22%, rgba(209, 209, 209, 0) -1.78%, #ADADAD 42.7%, rgba(131, 131, 131, 0) 95.47%, rgba(115, 115, 115, 0) 116%)",
        }}
      />
    </div>

    <div className="flex items-center flex-col mb-36 px-4">
      <h6 className="text-foreground/50 mb-2 text-lg md:text-xl lg:text-2xl md:text-center font-semibold">
        The most atmospheric sounds, the most enjoyable gameplay, with the ability to connect to toys
      </h6>
      <h1 className="text-foreground font-semibold text-5xl md:text-6xl lg:text-8xl md:text-center">
        Realize Your Sex Dreams
      </h1>

      <div className="flex flex-wrap gap-4 items-center mt-6">
        <Button variant="shadow"  className="text-background uppercase px-[38px] py-[25px] rounded-[35px]" color="secondary">Join the club</Button>
        <Button variant="shadow"  className="px-[38px] py-[25px] rounded-[35px] text-foreground uppercase" color="primary">Create your girl</Button>
      </div>
    </div>
  </section>
}

export default IntroSection
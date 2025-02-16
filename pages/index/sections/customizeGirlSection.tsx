import { CustomizeCard } from "@/components/customizeCard";
import { BoobsIcon, FigureIcon, SexualityIcon } from "@/components/icons";
import SensitiveContent from "@/components/sensitiveContent";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

const CustomizeGirlSection = () => {
    return <section className="relative isolate flex pb-8 flex-col items-center px-6 lg:px-8">
    {/* Background image and gradient */}
    <div className="absolute -z-10 w-screen h-full top-0 flex items-center justify-center">
      <Image
        alt="HeroUI hero Image"
        src="/customizeimage.jpeg"
        radius="none"
        className="h-full w-full scale-[1.35]"
        style={{
          maskImage: "linear-gradient(180deg, #D9D9D9 -12.22%, rgba(209, 209, 209, 0) -1.78%, #ADADAD 42.7%, rgba(131, 131, 131, 0) 95.47%, rgba(115, 115, 115, 0) 116%)",
          WebkitMaskImage: "linear-gradient(180deg, #D9D9D9 -12.22%, rgba(209, 209, 209, 0) -1.78%, #ADADAD 42.7%, rgba(131, 131, 131, 0) 95.47%, rgba(115, 115, 115, 0) 116%)",
           left:"-150px"
        }}
      />
    </div>

    <div className="flex items-center flex-col mb-10 px-4">
      <SensitiveContent imageUrl={'/video.gif'}/>
    </div>

    <div className="flex gap-10 items-center flex-col mb-14 mt-12 px-4">
      <h6 className="text-foreground/50 text-lg md:text-xl lg:text-2xl text-center font-semibold">
        the most atmospheric sounds, the most enjoyable gameplay, with the ability to connect to toys
      </h6>
      <h1 className="text-foreground font-semibold sm:text-xl text-2xl md:text-4xl lg:text-6xl text-center">
        Customize Your Girl According To All Categories
      </h1>

      <div className="flex flex-wrap gap-4 items-center mt-6">
        <Button radius="lg" variant="bordered" className="text-foreground uppercase px-[38px] py-[25px] rounded-[35px]" color="secondary">DOWNLOAD NOW</Button>
        <Button radius="lg" className="text-foreground uppercase px-[38px] py-[25px] rounded-[35px]" color="primary">Create your girl</Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full">

        <CustomizeCard text={"Boobs"} icon={<BoobsIcon/>} buttonText={"01 size"}/>
        <CustomizeCard text={"Figure"} icon={<FigureIcon/>} buttonText={"01 slimness"}/>
        <CustomizeCard text={"Sexuality"} icon={<SexualityIcon/>} buttonText={"01 level"}/>

    </div>
    <div>
      <p className="font-normal text-2xl text-foreground/50 mt-20 mb-10">
        the most atmospheric sounds, the most enjoyable gameplay, with the ability to connect to toys
      </p>
    </div>

  </section>
}

export default CustomizeGirlSection
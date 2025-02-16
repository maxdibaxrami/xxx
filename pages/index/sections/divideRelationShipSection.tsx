import SensitiveContent from "@/components/sensitiveContent"
import { Button } from "@heroui/button"
import { Image } from "@heroui/image";


const DivideRelationShopSection = () => {
    return <section className="relative flex pb-8 flex-col items-center">
            <div>
                <p className="font-normal mb-8 md:mb-4 text-2xl text-foreground/50 mt-14">
                    the most atmospheric sounds, the most enjoyable gameplay, with the ability to connect to toys
                </p>
            </div>

      <h1 style={{zIndex:30}} className="text-foreground font-semibold text-4xl md:text-6xl lg:text-8xl text-center">
         Divide Relationships Into Stages
      </h1>
    
        <div className="relative w-full mt-[-60px] h-[600px]">
            <Image
                alt="HeroUI hero Image"
                src="/mainSectionBackground.jpeg"
                className="w-full h-[600px] rounded-[30px]"
                style={{objectFit:"cover"}}
                classNames={{
                    wrapper: "w-full maxcontentimportant",
                }}
            />
            <div className="absolute bottom-0 p-4 md:px-14 pb-14 w-full z-10 flex flex-col md:flex-row justify-between">
                <div>
                    <Button
                    
                    className="bg-background/60 font-semibold backdrop-blur border border-[#FFFFFF4D] px-[78px] py-[22px] rounded-[30px]"
                    color="secondary" variant="bordered">
                        MEETING
                    </Button>

                    <Button 
                      className="bg-background/60 font-semibold backdrop-blur border border-[#FFFFFF4D] px-[78px] py-[22px] rounded-[30px]"
                    color="secondary" variant="bordered">
                        Ghost
                    </Button>

                </div>
                <div>
                    <Button radius="lg" className="text-background uppercase px-[78px] py-[22px] rounded-[30px]" color="secondary">TRY</Button>

                </div>
            </div>


            
        </div>


        <div className="relative w-full mt-[-25px] h-[600px]">
            <div className="w-full h-[600px] rounded-[30px]">
                <SensitiveContent isVideo={true} imageUrl={'/videoww.webm'}/>
            </div>
            <div className="absolute flex-col md:flex-row bottom-0 px-14 pb-14 w-full z-10 flex justify-between">
                <div>
                    <Button
                    
                    className="bg-background/60 font-semibold backdrop-blur border border-[#FFFFFF4D] px-[78px] py-[22px] rounded-[30px]"
                    color="secondary" variant="bordered">
                        HARD SEX
                    </Button>


                </div>
                <div>
                    <Button radius="lg" className="px-6 text-background uppercase px-[78px] py-[22px] rounded-[30px]" color="secondary">TRY</Button>

                </div>
            </div>


            
        </div>
  

      <div>
    </div>
</section>
}

export default DivideRelationShopSection
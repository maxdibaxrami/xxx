import DefaultLayout from "@/layouts/default";
import ThankForDownloadSection  from "./section/thankForDownloadSection";
import {Image} from "@heroui/image";
import { Logo } from "@/components/icons";
import { Button } from "@heroui/button";



export default function IndexPage() {
  return (
    <DefaultLayout disableFooter={true}>

        <section style={{position:"relative"}}>
          <div className="absolute w-screen h-full bottom-0 flex items-center justify-center">
            <Image
              alt="HeroUI hero Image"
              src="/thankfordowndbackground.jpeg"
              radius="none"
              className="h-full w-full scale-[1.2]"
              style={{
                maskImage: "radial-gradient(circle, #00000036 30%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle, #00000036 30%, transparent 70%)",
              }}
            />
          </div>
    
      <ThankForDownloadSection/>
      

      <footer className="relative h-[500px] flex items-center justify-center gap-4 flex-col">
              <div style={{zIndex:0}} className="absolute w-full">
              </div>
               <Logo style={{zIndex:100, scale:'1.7'}}/>
              <div style={{zIndex:10}}>
                <div className="flex flex-wrap gap-4 items-center mt-6">
                  <Button radius="lg" style={{opacity:0.7}} className="px-6 text-background uppercase py-7 rounded-[35px]" color="secondary">Join the club</Button>
                  <Button radius="lg"  className="px-6 text-foreground uppercase py-7 rounded-[35px]" color="primary">Create your girl</Button>
                </div>
              </div>
              <h6 style={{zIndex:10}} className="text-foreground/50 mt-8 text-sm md:text-md lg:text-lg text-center font-semibold">
                ©2025 NUDEX. All rights reserved. NUDEX are trademarks of <br/> NUDEX GAME  in the U.S. and/or other countries.
              </h6>
            </footer>

        </section>
    </DefaultLayout>
  );
}

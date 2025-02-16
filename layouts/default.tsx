import { Head } from "./head";
import { Image } from "@heroui/image";
import { Logo, TextIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
  disableFooter = false
}: {
  children: React.ReactNode;
  disableFooter:boolean;
}) {
  return (
    <div className="relative flex flex-col">
      <Head />
      <main className="container mx-auto max-w-7xl flex-grow">
        <Navbar/>
        {children}
      </main>
      {!disableFooter &&
              <footer className="relative h-[500px] flex items-center justify-center gap-4 flex-col">
              <div style={{zIndex:0}} className="absolute w-full">
                <Image
                  alt="HeroUI hero Image"
                  src="/footerimage.jpeg"
                  radius="none"
                  classNames={{
                    wrapper: "w-full maxcontentimportant",
                  }}
                  className="h-[500px] w-full"
                  style={{
                    maskImage: "background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(119, 119, 119, 0.960766) 96.08%, rgba(115, 115, 115, 0) 100%);",
                    WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
                  }}
                />
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
      }

    </div>
  );
}

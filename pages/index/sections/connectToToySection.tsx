import SensitiveContent from "@/components/sensitiveContent"
import { Button } from "@heroui/button"


const ConnectToToySection = () => {
    return <section className="relative flex pb-8 flex-col items-center">

      <h1 className="text-foreground font-semibold sm:text-2xl mb-6 text-4xl md:text-6xl lg:text-8xl text-center md:text-left">
        Connect To The Toy And Enjoy <br className="block md:hidden"/>
        <Button style={{verticalAlign:"middle"}} radius="lg" variant="bordered" className="mx-2 mt-2 md:mt-0 text-foreground uppercase py-7 px-[38px] py-[25px] rounded-[35px]" color="secondary">DOWNLOAD NOW</Button>
        <Button style={{verticalAlign:"middle"}} radius="lg" className="mx-2 text-foreground mt-2 md:mt-0 uppercase px-[38px] py-[25px] rounded-[35px]" color="primary">Create your girl</Button>
      </h1>

      <div className="flex w-full items-center flex-col">
        <SensitiveContent imageUrl={'/video2.gif'}/>
      </div>

      <div>
    </div>
</section>
}

export default ConnectToToySection
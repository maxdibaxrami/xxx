import { Button } from "@heroui/button"
import { SettingIcon } from "./icons"

export const CustomizeCard = ({text,icon,buttonText}:any) => {
    return <div className="flex-1">
        <div className="flex h-[135px] items-center justify-center gap-4 rounded-[80px] bg-foreground/10 text-foreground backdrop-blur-2xl">
            {icon}
            <p className="text-4xl font-semibold">{text}</p>
        </div>

        <div className="grid mt-4 grid-cols-2 gap-2 w-full">
            <Button className="py-7 font-semibold rounded-[35px]" color="primary" variant="solid">
                {buttonText}
            </Button>

            <Button className="py-7 rounded-[35px]" color="secondary" variant="bordered">
                <SettingIcon/>
            </Button>
        </div>
    </div>
}
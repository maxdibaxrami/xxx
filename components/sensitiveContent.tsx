import { Image } from "@heroui/image";
import { useState } from "react";
import { InfoIcon } from "./icons";
import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";

const SensitiveContent = ({imageUrl, isVideo=false}:{imageUrl:string; isVideo?:boolean }) => {
    const [showContent, setShowContent] = useState(false);

    const onChange = () => {
        setShowContent(true);
    };

    return (
        <div className={`relative w-full h-[400px] md:h-full`}>
            <AnimatePresence>
                {!showContent && (
                    <motion.div
                        key="sensitive-content"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }} // Smooth fade-out effect
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                        }}
                        className={`absolute gap-6 backdrop-blur-2xl h-full h-full w-full z-10 flex items-center justify-center flex-col rounded-xl`}
                    >
                        <InfoIcon />
                        <h1 className="font-semibold text-foreground sm:text-xl md:text-6xl">Sensitive Content</h1>
                        <p style={{maxWidth:"90%"}} className="text-foreground/60 w-[450px] text-wrap text-center font-normal">
                            By clicking on the watch button you confirm that you are ready to watch nudity, sexual activity, etc.
                        </p>

                        <Button
                            onPress={onChange}
                            radius="lg"
                            className="px-[78px] py-[22px] rounded-[30px]"
                            color="secondary"
                            variant="bordered"
                        >
                            SEE
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {isVideo ? 
                    /* eslint-disable jsx-a11y/media-has-caption */

                <video autoPlay className="md:h-[600px] h-[400px]" style={{ width:"100%",objectFit:"cover", borderRadius:"30px"}} controls>
                <source src={imageUrl} type="video/webm" />
                </video>
        :
        <Image
                alt="HeroUI hero Image"
                src={imageUrl}
                className="w-full h-full z-0"
                classNames={{
                    wrapper: "w-full maxcontentimportant h-full",

                }}
            />
        }
        
            
        </div>
    );
};

export default SensitiveContent;

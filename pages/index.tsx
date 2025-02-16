import DefaultLayout from "@/layouts/default";
import IntroSection  from "./index/sections/IntroSection";
import CustomizeGirlSection  from "./index/sections/customizeGirlSection";
import ConnectToToySection from "./index/sections/connectToToySection";
import DivideRelationShopSection from "./index/sections/divideRelationShipSection";


export default function IndexPage() {
  return (
    <DefaultLayout disableFooter={false}>
      <IntroSection/>
      <CustomizeGirlSection/>
      <ConnectToToySection/>
      <DivideRelationShopSection/>
    </DefaultLayout>
  );
}

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import {
  Logo,
} from "@/components/icons";

export const Navbar = () => {

  return (
    <HeroUINavbar isBlurred style={{paddingTop:"15px",paddingBottom:"15px"}} maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex">
          <Button
            isExternal
            as={Link}
            className="text-lg uppercase font-semibold bg-default-100 px-[38px] py-[25px] rounded-[35px]"
            variant="flat"
            radius="full"
          >
            Join to club
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};

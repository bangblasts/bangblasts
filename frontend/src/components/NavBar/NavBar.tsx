import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@nextui-org/react"

import { IMAGES } from "../../assets/Images";

export const NavBar = () => {

    return (
        <Navbar maxWidth="full" className={' bg-[#0E0B28] p-[0]'}>
            <NavbarContent justify={'start'}>
                <NavbarBrand className="gap-2 pl-[126px]">
                    <img src={IMAGES.logo} alt="logo" className="h-7" />
                    <p className={"text-[#FFF] text-[24px] leading-[32px] font-medium"}>Bang Blasts</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="sm:flex gap-[40px]" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#" className={'text-[#ABAAB4] text-[14px] leading-[20px] font-light tracking-wider'}>
                        Bang Blasts chips
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className={'text-[#ABAAB4] text-[14px] leading-[20px] font-light tracking-wider'}>
                        Gaming Room
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className={'text-[#ABAAB4] text-[14px] leading-[20px] font-light tracking-wider'}>
                        Reception Room
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className={'text-[#ABAAB4] text-[14px] leading-[20px] font-light tracking-wider'}>
                        Why choose
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:flex pr-[150px]" justify="end">
                <NavbarItem>
                    <Button className={'bg-[#C841E4] min-w-[143px] max-h-[36px] rounded-[16px]'}>Send an email </Button>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    )
}
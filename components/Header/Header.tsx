'use client'
import React, { useState, useEffect } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "../ModeToggle";
import { CgMenuRight } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Menubar
      className={`h-14 flex shadow-none w-full items-center justify-center gap-10 z-50 fixed top-0 left-0 transition-colors duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <MenubarMenu>
        <div className="flex justify-between items-center gap-20 container mx-5">
          <MenubarTrigger className="bg-none">LOGO</MenubarTrigger>

<div className='flex items-center '>

<MenubarTrigger className='bg-none'>Work</MenubarTrigger>
<MenubarTrigger className='bg-none'>Services</MenubarTrigger>  
<MenubarTrigger className='bg-none'>Pricing</MenubarTrigger>  
<MenubarTrigger className='bg-none'>Customer</MenubarTrigger>
<MenubarTrigger className='bg-none'>Contact Us</MenubarTrigger>
</div>

<div className=' flex items-center'>
    
  <Button>Let's Do it</Button>

<ModeToggle/>
</div>
 
      </div>


    </MenubarMenu>
  </Menubar>
 
  
  )
}

export default Header
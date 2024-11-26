import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Button } from '../ui/button'
import { ModeToggle } from '../ModeToggle'
  
const Header = () => {
  return (
   
     <Menubar className='h-14 flex shadow-none  items-center justify-center gap-10  '>
    <MenubarMenu >
      <div  className=' flex justify-between items-center gap-20 container  mx-5'>
      <MenubarTrigger className='bg-none'>LOGO</MenubarTrigger>

<div className='flex items-center '>

<MenubarTrigger className='bg-none'>Work</MenubarTrigger>
<MenubarTrigger className='bg-none'>Services</MenubarTrigger>  
<MenubarTrigger className='bg-none'>About Us</MenubarTrigger>  
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
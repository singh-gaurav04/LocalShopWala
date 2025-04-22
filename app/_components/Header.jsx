import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className='p-4 shadow-md flex justify-between'>
      <div className='flex  items-center gap-8'>
        <Image
          src='/logo.png'
          alt='Logo'
          width={50}
          height={50}
          className='logo rounded-full'
        />

        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer'>
              <LayoutGrid className='h-5 w-5' /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='hidden md:flex items-center gap-3 border rounded-full p-2 px-5 '>
          <Search />
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search'
            className='outline-none'
          />
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <h2 className='flex gap-2 text-lg items-center'>
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;

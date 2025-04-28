"use client";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const res = await GlobalApi.getCategories();
      console.log("Category List:", res.data.data);
      setCategories(res.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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

            {categories.map((category, index) => {
              const baseUrl = "http://localhost:1337";

              //  imaage fetch problem

               const imageUrl = `${baseUrl}${category.icon[0].formats.small.url}`;
              return (
                <DropdownMenuItem key={index} className="flex items-center gap-3 cursor-pointer ">
                 
                  <Image
                    src={imageUrl}
                    alt={category.name || "Category Icon"}
                    width={24}
                    height={24}
                    unoptimized={true}
                  />
                  <h2 className='font-semibold capitalize text-md'>
                    {category.name}
                  </h2>
                
                </DropdownMenuItem>
              );
            })}
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

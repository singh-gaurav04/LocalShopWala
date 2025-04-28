import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  const baseUrl = "http://localhost:1337";
  const imageUrl = `${baseUrl}${product.images[0].formats.thumbnail.url}`;

  return (
    <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg shadow-md font-bold group hover:bg-green-100'>
      <Image
        src={imageUrl}
        width={500}
        height={200}
        className='h-[200px] w-[200px] object-contain group-hover:scale-110 transition-all ease-in-out'
        alt='icon'
      />
      <h2>{product.name}</h2>
      <div className='flex gap-2 '>
        {product.sellingPrice && <h2 className=''>${product.sellingPrice}</h2>}

        <h2
          className={`${
            product.sellingPrice ? "line-through" : ""
          } text-gray-500`}
        >
          ${product.mrp}
        </h2>
      </div>

      <Button
        variant='outline'
        className='cursor-pointer text-green-400 hover:bg-green-400 hover:text-white transition-all  ease-in-out'
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductItem;

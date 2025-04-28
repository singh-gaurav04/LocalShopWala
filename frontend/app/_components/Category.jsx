import Image from "next/image";
import React from "react";

const Category = ({ categoryList }) => {
  return (
    <div className='mt-5'>
      <h2 className='font-bold text-green-600 capitalize text-xl'>
        shop by category
      </h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-5 md:grid-cols-6 lg:grid-cols-7 mt-3 '>
        {categoryList.map((item, index) => {
          const baseUrl = "http://localhost:1337";
          const imageUrl = `${baseUrl}${item.icon[0].formats.small.url}`;
          return (
            <div
              key={index}
              className='flex flex-col items-center gap-2 bg-green-50 p-3 cursor-pointer rounded-lg group hover:bg-green-200'
            >
              <Image
                src={imageUrl}
                alt='Category Icon'
                width={50}
                height={50}
                className="group-hover:scale-125 transition-all ease-in-out"
              />
              <h2 className='font-semibold capitalize text-md text-green-800'>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

import React from 'react'
import Sliders from './_components/Sliders'
import GlobalApi from './_utils/GlobalApi'
import Category from './_components/Category';
import Products from './_components/Products'

const page = async () => {

  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getproducts();
  
  return (
   <div className='p-5 md:p-10 md:px-16 px-6 overflow-x-hidden'>
     <Sliders sliderList={sliderList}/>
     <Category categoryList={categoryList}/>
     <Products productList={productList}/>
   </div>
  )
}

export default page
import React from 'react'
import Sliders from './_components/Sliders'
import GlobalApi from './_utils/GlobalApi'
import Category from './_components/Category';

const page = async () => {

  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();

  return (
   <div className='p-5 md:p-10 px-16 overflow-x-hidden'>
     <Sliders sliderList={sliderList}/>
     <Category categoryList={categoryList}/>
   </div>
  )
}

export default page
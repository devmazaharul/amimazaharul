import { site_data } from '@/lib/site_data'
import React from 'react'
import { SiAntdesign } from "react-icons/si";
import { MdOutlineCleaningServices } from "react-icons/md";

import { TbBrandBumble } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";

export default function Services() {
    const {services_section:{title,desc,services},colorSchima}=site_data;

  return (
    <div className='py-16 px-4 bg-white rounded-xl  mb-4 '>
     <div>
     <p className='flex items-center gap-1 border rounded-full w-fit px-2 py-1 text-sm uppercase text-gray-500 mb-6 '>services
        <MdOutlineCleaningServices className='text-[#00bc91]'/></p>
       
     </div>
  
       <div className='grid md:grid-cols-8'>
        <div className='md:col-span-7'>

        <h1 className=' font-bold text-4xl capitalize pb-3 text-[#00bc91]'>{title}</h1>
        <p className='text-gray-500 '>{desc}</p>
       
        <div className='my-4 grid md:grid-cols-2 grid-cols-1  '>
            {services.map((item=>(
               <div key={Math.random()} className=' md:m-2 my-2 text-gray-500 border rounded-md mx-auto '>

             <div className=' block  rounded-md px-4 py-6 text-left leading-6'>
                <p className='pb-2'>{item.iconName=="web_design"?<SiAntdesign className={`text-[${colorSchima.text_color}] text-2xl`}/>:item.iconName=="web_development"?<FaNodeJs className={`text-[${colorSchima.text_color}] text-2xl`}/>:item.iconName=="seo"?<MdGraphicEq className={`text-[${colorSchima.text_color}] text-2xl`}/>:item.iconName=="branding"?<TbBrandBumble className={`text-[${colorSchima.text_color}] text-2xl`}/>:'Icon'}</p>
                <h1 className='text-xl pb-2 font-semibold'>{item.name}</h1>
                <p>{item.sortdescribe}</p>
               
                </div>
                
               </div>
            )))}
          
        </div>
       
        </div>
        
       </div>

    </div>
  )
}

import { site_data } from '@/lib/site_data'
import React from 'react'
import Link  from 'next/link';

import { MdWorkOutline } from "react-icons/md";


export default function About() {
    const {about_section:{title,desc,work_status,contactInfo},colorSchima}=site_data;
  return (
    <div className='py-16 px-4 bg-white rounded-xl  mb-4 '>
     <div>
     <p className='flex items-center gap-1 border rounded-full w-fit px-2 py-1 text-sm uppercase text-gray-500 mb-6 '>{title}
        <MdWorkOutline className='text-[#00bc91]'/></p>
       
     </div>
  
       <div className=''>
        <div className=''>

        <h1 className=' font-bold text-4xl capitalize pb-3 text-[#00bc91]'>{title}</h1>
        <p className='text-gray-500'>{desc}</p>
       
        <div className='my-4 grid md:grid-cols-2 grid-cols-1 '>
            {contactInfo.map((item=>(
               <div key={Math.random()} className=' m-1 text-gray-500  '>
             <div className='border border-gray-100  block py-3 px-2 rounded-md'>{item.name=="Github" || item.name=="Web"?<Link target='_blank'  href={item.text}>{item.name} : {item.text}</Link>:<p>{item.name} : {item.text}</p>}</div>
                
               </div>
            )))}
          
        </div>
        <div className='my-4 grid md:grid-cols-4 grid-cols-2  text-center '>
            {work_status.map((item=>(
               <div key={Math.random()} className=' m-1 border md:border-none text-gray-500  py-6 px-4 rounded-md  '>
              <p className={`text-[${colorSchima.text_color}] text-2xl font-semibold`}>{item.title}</p>
              <p>{item.text}</p>
               </div>
            )))}
          
        </div>
        </div>
        
       </div>

    </div>
  )
}

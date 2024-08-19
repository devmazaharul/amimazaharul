import { site_data } from '@/lib/site_data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const {header:{site_logo_url,header_cv_download_link:{btn_name,cv_path},header_menu_list}}=site_data;
  return (
    <React.Fragment>

<div className='grid grid-cols-6  items-center py-2 px-4'>
  <div className='col-span-2'>
    <Image src={site_logo_url} width={50} height={50}></Image>
  </div>
  <div className='col-span-3 '>
    {header_menu_list.map((item)=>(
      <Link className=' px-3' href={item.path}>{item.name}</Link>
    ))}
  </div>
  <div className='col-span-1'>
<Link href={cv_path} target='_black'  className='bg-blue-500 hover:bg-indigo-600 px-4 py-1 rounded-md text-gray-100 '>{btn_name}</Link>
  </div>
</div>


    </React.Fragment>
  )
}

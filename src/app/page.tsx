import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
function page() {
  return (
   <main className=''>
   <div className='flex flex-col lg:flex-row items-center bg-[#282929]'>
    <div className='p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 
    text-white space-y-5'>
      <h1 className='text-5xl font-bold'>Welcome to DropBox</h1>
      <br/>
    
      Storing everything for you a your business.All in one Place
      <p className="pb-20">
        
Dropbox is a cloud-based file hosting service that allows users to store
 and share files and folders with others across the internet.
  It was founded in 2007 by Drew Houston and Arash Ferdowsi
   and has since become one of the most popular cloud storage solutions globally.

      </p>
      <Link href="/dashboard" className='flex cursor-pointer bg-blue-500 p-5 w-fit'>
        try it for free
        <ArrowRight className='ml-10'/>
      </Link>
    </div>
    <div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10'>
      <video autoPlay loop muted className='rounded-lg'>
        <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"/>

      </video>
    </div>
   </div>
   </main>
  )
}

export default page

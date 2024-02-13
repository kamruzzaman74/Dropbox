import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import pic from '../../photo/kk.png'
import { UserButton } from '@clerk/nextjs';
import { SignInButton, SignedOut } from '@clerk/nextjs';

import { ThemeToggle } from '@/components/ThemeToggle';

function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link href="/" className='flex items-center space-x-2'>
        <div className='bg-[#0160FE] w-fit'>
          <Image
            src={pic}
            alt="logo"
            className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className='font-bold text-xl'>DropBox</h1>
      </Link>
      <div  className='px-5 flex space-x-2 items-center'>
        <ThemeToggle/>
        <UserButton afterSignOutUrl='/' />
        <SignedOut>
          <SignInButton afterSignInUrl='/Dashboard' mode='modal' />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;


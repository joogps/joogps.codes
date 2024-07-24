"use client"

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const currentRoute = '/';

  return (
    <div className="fixed top-4 w-full flex items-center font-bold">
      <div className="mx-auto flex space-x-1 p-1 rounded-full backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-10">
        <Link href="/" passHref>
          <p className={`px-6 p-3 bg-white rounded-full cursor-pointer text-black`}>home</p>
        </Link>
        <Link href="/about" passHref>
          <p className={`px-6 p-3 cursor-pointer}`}>about</p>
        </Link>
        <Link href="/projects" passHref>
          <p className={`px-6 p-3 cursor-pointer}`}>projects</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='navbar text-white bg-black'>
      <ul className='flex p-8 gap-4 justify-center item-center'>
        <li className='text-xl'>
          <Link href='/'>Home</Link>
        </li>
        <li className='text-xl'>
          <Link href='/characters'>Character</Link>
        </li>
        <li className='text-xl'>
          <Link href='/episodes'>Episode</Link>
        </li>
        <li className='text-xl'>
          <Link href='/location'>Location</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

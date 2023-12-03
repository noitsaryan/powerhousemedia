'use client'
import { CiMenuFries } from "react-icons/ci";
import React, { useState, useEffect, useRef } from 'react';
import { TfiClose } from "react-icons/tfi";
import gsap from "gsap";
import Link from "next/link";

function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const menuElement = menuRef.current;

    gsap.to(menuElement, {
      y: open ? '0%' : '-100%',
      duration: 1,
      ease: 'power3.inOut',
    });

  }, [open]);

  function animate() {
    setOpen((prev) => !prev);
  }
  const menuArray = [
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Connect",
        link: "/connect"
    },
    {
        name: "Brand",
        link: "/brand"
    },
    {
        name: "Influencer",
        link: "/influencer"
    },

  ]
  return (
    <>
      <CiMenuFries size={25} className="cursor-pointer" onClick={animate} />
      <section
        ref={menuRef}
        className={`menu w-screen h-screen absolute left-0 right-0 bottom-0 z-50 backdrop-blur-lg bg-black/20 ${open ? '' : 'hidden'}`}
      >
        <div className='w-full h-full bg-white/30 relative'>
          <nav className="flex items-center justify-between px-[8vw] py-[3vw]">
              <h1 className='text-[3vw] text-center text-gray-600'>MENU</h1>
          <TfiClose
            size={25}
            className='text-gray-600 cursor-pointer'
            onClick={animate}
          />
          </nav>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
                {
                    menuArray.map((e,i)=>(
                        <div className={`mb-4 text-2xl cursor-pointer text-gray-600 uppercase border border-gray-600/50 hover:border-gray-600/30  hover:bg-gray-600/30 transition-all hover:text-white w-full py-[2vw] text-center ${i === 3 ? "mb-0" : ''}`} >
                            <Link href={e.link} key={i} > {e.name} </Link>
                        </div>
                    ))
                }
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;

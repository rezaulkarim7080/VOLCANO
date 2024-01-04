"use client";

import Image from "next/image";
import avatar from "../public/image/avatar.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaRegBell,
} from "react-icons/fa";
import { SearchIcon } from "@heroicons/react/solid";
import { useUserAuth } from "../app/context/AuthContext";
import { useRouter } from 'next/navigation'


export default function Header() {

  const router = useRouter();

  //  useState
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
  };

  //  LOGOUT useState 
  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut()
      router.push("/");
    } catch (error) {
      console.log(error)
    }

  }

  {
    /* MAIN PART*/
  }

  return (
    // <header className={`${isScroll && 'bg-[#141414]'}`}>
    <header>
      <div className=" w-full z-[-100]">
        <div className="flex h-20 w-full justify-between items-center md:px-14 ">
          {/* div-1*/}
          <div>
            <Link href={"/"}>
              <h1 className="text-3xl px-5 font-bold text-[#d92525]">
                VOLCANO
              </h1>
            </Link>
          </div>

          {/* div-2*/}

          {user?.email ? (
            <div>
              <div>
                <ul className="hidden md:flex items-center">
                  <Link href="/">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] ">
                      Home
                    </li>
                  </Link>
                  <Link href="/tvShows">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] ">
                      TV Shows
                    </li>
                  </Link>
                  <Link href="/movies">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] ">
                      Movies
                    </li>
                  </Link>
                  <Link href="/new&Popular">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] black">
                      New & Popular
                    </li>
                  </Link>
                  <Link href="/myList">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] black">
                      My List
                    </li>
                  </Link>
                  <div >
                    <ul className="flex  items-center ">
                      {/* <li>
                        <FaSearch size={20} className="text-white ml-5  hover:text-[#d92525]" />
                      </li> */}
                      <li>
                        <FaRegBell size={20} className="text-white ml-5  hover:text-[#d92525]" />
                      </li>
                      <Link href={'/account'}>
                        <li>
                          <Image src={avatar} width={30} height={30} alt="avatar" className="rounded-full  ml-4" />
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <Link href="/login">
                    <li>
                      <button onClick={handleLogout}
                        type="button"
                        className="w-full px-5 py-2  rounded-md  bg-[#d92525] ml-8 text-white"
                      >
                        Log-out
                      </button>
                    </li>
                  </Link>
                  {/* icons & account */}

                  {/* end icons & account */}
                </ul>


              </div>
            </div>

          ) : (
            <div>
              <div>
                <ul className="hidden md:flex items-center">
                  <Link href="/">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] ">
                      Home
                    </li>
                  </Link>
                  <Link href="/tvShows">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] ">
                      TV Shows
                    </li>
                  </Link>
                  <Link href="/movies">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] ">
                      Movies
                    </li>
                  </Link>
                  <Link href="/new&Popular">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] black">
                      New & Popular
                    </li>
                  </Link>
                  <Link href="/myList">
                    <li className="ml-7 text-sm  hover:border-b hover:text-[#d92525] black">
                      My List
                    </li>
                  </Link>
                  <Link href="/login">
                    <li>
                      <button
                        type="button"
                        className="w-full px-5 py-2  rounded-md  text-[#d92525] ml-4 bg-white"
                      >
                        Sign in
                      </button>
                    </li>
                  </Link>
                  <Link href="/signup">
                    <li>
                      <button
                        type="button"
                        className="w-full px-5 py-2  rounded-md  bg-[#d92525] ml-8 text-white"
                      >
                        Sign up
                      </button>
                    </li>
                  </Link>

                </ul>

                {/* responsive Menu ICons */}

                <div className="flex items-center">
                  <div onClick={handlenav} className="px-4 block md:hidden">
                    {nav ? (
                      <AiOutlineClose size={25} />
                    ) : (
                      <AiOutlineMenu size={25} />
                    )}
                  </div>

                  <Link href={"/account"}>
                    <Image
                      src={avatar}
                      width={30}
                      height={30}
                      alt="avatar"
                      className="rounded-full md:hidden "
                    />
                  </Link>
                  <FaRegBell
                    size={30}
                    className="text-white md:hidden ml-5 mr-3"
                  />
                </div>
              </div>
            </div>
          )}
          {/* responsive Menu ICons */}

          <div className="flex items-center">
            <div onClick={handlenav} className="px-4 block md:hidden">
              {nav ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>

            <Link href={"/account"}>
              <Image
                src={avatar}
                width={30}
                height={30}
                alt="avatar"
                className="rounded-full md:hidden "
              />
            </Link>
            <FaRegBell
              size={30}
              className="text-white md:hidden ml-5 mr-3"
            />
          </div>
        </div>

        {/* responsive Navbar */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] z-50 h-full bg-[#0d0d0d] ease-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div>
            <div>
              <h1 className="text-2xl my-5 ml-10 font-bold text-[#d92525]">
                VOLCANO
              </h1>
            </div>
          </div>
          <div className="py-4 ">
            <ul>
              <Link href="/">
                <li className="py-4 text-[#d92525] hover:text-white ml-10 text-sm  border-b">
                  Home
                </li>
              </Link>
              <Link href="/tvShows">
                <li className="py-4 text-[#d92525] hover:text-white ml-10 text-sm  border-b">
                  TV Shows
                </li>
              </Link>
              <Link href="/movies">
                <li className="py-4 text-[#d92525] hover:text-white ml-10 text-sm  border-b">
                  Movies
                </li>
              </Link>
              <Link href="/new&Popular">
                <li className="py-4 text-[#d92525] hover:text-white ml-10 text-sm  border-b">
                  New & Popular
                </li>
              </Link>
              <Link href="/myList">
                <li className="py-4 text-[#d92525] hover:text-white ml-10 text-sm  border-b">
                  My List
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};



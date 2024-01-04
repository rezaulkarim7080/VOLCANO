import Link from "next/link";
import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[100%] mx-auto pt-16 grid md:grid-cols-2 gap-5 bg-slate-950 text-gray-300 px-5 md:px-10">
      <div>
        <h1 className="width-full text-3xl font-bold text-[#5651e5]">
          Rezaul Karim.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          accusantium tenetur alias odit error, quae aspernatur esse a rem fuga!
        </p>
        <div className="flex justify-between md:w-[40%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>

      <div className="flex justify-evenly md:justify-between  md:mx-10">
        {/* part-1 */}
        <div className="md:col-span-3 ">
          <h5 className="font-medium ">Solutions</h5>
          <ul>
            <Link href="/">
              <li className="py-2 text-sm"> Analytics</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Marketting</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Commerce</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Insights</li>
            </Link>
          </ul>
        </div>
        {/* part-2 */}
        <div className="md:col-span-3 ">
          <h5 className="font-medium ">Suppport</h5>
          <ul>
            <Link href="/">
              <li className="py-2 text-sm"> Pricing </li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Documentation</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Guides</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Api Status</li>
            </Link>
          </ul>
        </div>
        {/* part-3 */}
        <div className="md:col-span-3 ">
          <h5 className="font-medium ">Company</h5>
          <ul>
            <Link href="/">
              <li className="py-2 text-sm"> About</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Blogs</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Press</li>
            </Link>
            <Link href="/">
              <li className="py-2 text-sm"> Creear</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

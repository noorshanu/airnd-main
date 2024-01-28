import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" mt-0   py-10  ">
      <div className=" container-wrapper">
        <div>
          <img src="images/foot.png" alt="" className=" mx-auto h-[135px]" />
        </div>

        <h1 className="text-center">
          YOU ARE WELCOME TO BE PART OF OUR COMMUNITY
        </h1>
        <div className=" bg-[#00ffc0] h-[4px] w-full max-w-sm mx-auto"></div>

        <div className=" flex justify-center items-center">
          <a
            href="/"
            className=" bg-[#193200] hover:bg-[#002732] border-2 border-[#76ee00] hover:border-[#00c5ff]  hover:text-black px-14 py-2 font-semibold font-mon text-lg"
          >
            {" "}
            Buy Now{" "}
          </a>
        </div>

        <div className=' flex justify-center gap-5'>
          <a href="/"> <FaTelegram className=' text-2xl'/></a>
          <a href="/"> <BsTwitterX className=' text-2xl'/></a>
          <a href="/"><BsInstagram className=' text-2xl'/></a>
          <a href="https://bscscan.com/token/0x725d1918b30a6c073c5cb7108f400f8ebccc8f95" target='_blank'>
            <img src="images/bsc.svg" alt="" className='h-[26px]' />
          </a>
        </div>


        <div className="flex justify-center gap-6 items-center">

          <img src="images/logo.png" alt="" className="h-[30px]" /> | 
          <p className=" font-mon">All Rights Reserved </p> |
          <p>2024</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

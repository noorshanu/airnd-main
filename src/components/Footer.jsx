import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" mt-0   py-10  ">
      <div className=" container-wrapper">
        <div>
          <img src="images/foot.png" alt="" className=" mx-auto h-[135px] mb-[3rem] mt-[5rem]" />
        </div>

        <h1 className="text-center font-mon text-2xl  mb-4">
          YOU ARE WELCOME TO BE PART OF OUR COMMUNITY
        </h1>
        <div className=" bg-[#00ffc0] h-[4px] w-full max-w-2xl mx-auto"></div>

        <div className=" flex justify-center items-center mt-[3rem]">
          <a
            href="/"
            className=" bg-[#00ffc0] hover:bg-[#002732] border-2 border-[#00a57c] hover:border-[#00c5ff]  hover:text-white text-black px-14 py-2 font-semibold font-mon text-xl"
          >
            {" "}
            Join Us Now !{" "}
          </a>
        </div>

        <div className=' flex justify-center gap-5 mt-[4rem]'>
        <a href="/"> <BsTwitterX className=' text-3xl'/></a>
          <a href="/"> <FaTelegram className=' text-3xl'/></a>
        
          <a href="/"><BsInstagram className=' text-3xl'/></a>
          <a href="https://bscscan.com/token/0x725d1918b30a6c073c5cb7108f400f8ebccc8f95" target='_blank'>
            <img src="images/bsc.svg" alt="" className='h-[30px]' />
          </a>
        </div>


        <div className="flex justify-center gap-4 items-center mt-[2.5rem]">

          <img src="images/logo.png" alt="" className="h-[25px]" /> | 
          <p className=" font-mon text-sm sm:text-base">All Rights Reserved </p> |
          <p className="font-mon text-sm sm:text-base">2024©</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

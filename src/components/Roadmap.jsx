import React from "react";
import RoadMob from "./RoadMob";

function Roadmap() {
  return (
    <section className=" relative  z-50 " id="road" >
      <div className="container-wrapper py-16  ">
        <img src="images/tar.png" alt="" className=" mx-auto h-[130px] glow-anime show-xl rounded-full border-transparent" />

        <div>
          <h1 className="text-center text-2xl font-mon mb-2"> OUR ROADMAP</h1>
          <div className=" bg-[#00ffc0] h-[4px] w-full max-w-[210px] mx-auto "></div>
        </div>

        <div className=" relative mt-[8%]  ">
          <div className=" block sm:hidden mx-4">
            <div className=" mx-auto -mb-[16%]">
              <RoadMob/>

            </div>


          </div>
          <div className=" sm:flex items-center  gap-[20rem] -mb-[7.5%] relative z-40   hidden ">
            <img src="images/box-1.png" alt="" className=" h-[350px]" />
            <img src="images/box-1.png" alt="" className=" h-[350px]" />
          </div>

          <img src="images/roadLine.png" alt="" />
          <div className=" sm:flex hidden justify-end items-center  gap-[18rem] -mt-[7.5%] -mr-[4%]">
            <img src="images/box-2.png" alt="" className=" h-[350px]" />
            <img src="images/box-2.png" alt="" className=" h-[350px]" />
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Roadmap;

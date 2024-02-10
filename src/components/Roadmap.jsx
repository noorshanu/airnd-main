import React from "react";
import RoadMob from "./RoadMob";

function Roadmap() {
  return (
    <section className=" relative  z-50 " id="road" >
      <div className="container-wrapper py-16  ">
        <img src="images/tar.png" alt="" className=" mx-auto h-[130px]  rounded-full border-transparent" />

        <div>
          <h1 className="text-center text-2xl font-mon mb-2"> OUR ROADMAP</h1>
          <div className=" bg-[#00ffc0] h-[4px] w-full max-w-[210px] mx-auto "></div>
        </div>

        <div className=" relative mt-[8%] z-[999]  ">
          <div className=" block sm:hidden mx-4">
            <div className=" mx-auto -mb-[16%]">
              <RoadMob/>

            </div>


          </div>
          <div className=" sm:flex items-center  gap-[20rem] -mb-[7.5%] relative z-40   hidden ">
         <div className=" relative">
         <img src="images/box-1.png" alt="" className=" h-[450px]" />
         <div className=" absolute top-16 left-0 right-0 px-[2.2rem]">
          <h1 className=" text-center text-lg font-mon font-medium">Phase 1: Foundation and Conceptualization</h1>
     
          <p>
          •	Development of the Idea: Begin with formulating the concept and strategic plan for Airnd.
          </p>
          <p>
          •	Framework and Team Building: Establish the core framework  for Airnd and assemble a dedicated team of experts.
          </p>

         </div>
         </div>
         <div className=" relative">
         <img src="images/box-1.png" alt="" className=" h-[450px]" />
         <div className=" absolute top-16 left-0 right-0 px-[2.2rem]">
          <h1 className=" text-center text-lg font-mon font-medium">Phase 2 : Platform Development and Community Building</h1>
     
          <p>
          •	Creation of Website and Social Media Channels: Develop the official website and create profiles on key social media platforms to engage with the community.
          </p>
          <p>
          •	Start Building Community: Initiate community-building efforts to gather support and feedback from potential users.
          </p>
          <p>
          •	Creation of Token by Safu Developer: Develop the Airnd token with a focus on security and reliability.
          </p>

         </div>
         </div>
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

import React from "react";

function Cards({title,Iconsrc}) {
  return (
    <div className="f-card py-3 mx-4 px-4 border-2 rounded-sm border-[#e4ff00] bg-[#030807] show-xl transform 
    transition duration-1000 
    hover:scale-110 cursor-pointer">
      <div className="flex justify-between mb-[4rem] ">
        <h2 className=" font-mon text-xl font-medium">{title}</h2>

        <img src={Iconsrc} alt="" className="h-[35px]" />
      </div>

      <p className=" mx-auto ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque labore
        vitae amet dolorem in magni velit est quod voluptate laborum maiores
        quis voluptates nihil perferendis accusantium, placeat temporibus ut
        sunt!
      </p>
    </div>
  );
}

export default Cards;

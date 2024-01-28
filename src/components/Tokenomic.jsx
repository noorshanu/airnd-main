import React, { useRef } from "react";
import { AiTwotoneCopy } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tokenomic() {
  const notify = () => {
    toast.success("Copied!");
  };
  const textToCopy = "0x725d1918b30a6c073c5cb7108f400f8ebccc8f95";
  const textArea = useRef(null);
  const copyToClipboard = () => {
    textArea.current.select();
    document.execCommand("copy");
    notify();
  };
  return (
    <section className=" mt-[4rem]">
      <div className=" container-wrapper">
        <img src="images/tok.png" alt="" className=" mx-auto h-[130px]" />

        <div>
          <h1 className="text-center text-2xl font-mon mb-2">
            {" "}
            OUR TOKENOMICS
          </h1>
          <div className=" bg-[#00ffc0] h-[4px] w-full max-w-[240px] mx-auto "></div>
        </div>

        <div className=" flex justify-center flex-col sm:flex-row gap-6 items-center mt-[4rem] mb-3" m>
          <a
            href="/"
            className=" bg-[#006a37] hover:bg-[#002732] border-2 border-[#00ed80] hover:border-[#00c5ff]  hover:text-black px-14 py-3 font-semibold font-mon text-lg"
          >
            {" "}
            BUY TAX <strong>0%</strong>
          </a>

          <a
            href="/"
            className=" bg-[#6a2000] hover:bg-[#193200] hover:border-[#76ee00]  border-2 border-[#ed4e00] px-14 sm:px-10 py-3 hover:text-black font-semibold font-mon text-lg"
          >
            {" "}
            SELL TAX <strong>2%</strong>
          </a>
        </div>
        <img src="images/token.png" alt="" className=" sm:h-[500px] h-auto mx-auto p-4 mt-[4rem] mb-[2rem]" />

        <div></div>
        <ToastContainer />

        <div className="flex justify-center gap-5">
          <input
            type="text"
            value={textToCopy}
            readOnly
            ref={textArea}
            className="text-white bg-transparent border border-gray-800 font-monot rounded-md py-1 w-[500px] px-4 text-xs mx-auto sm:mx-0  sm:text-lg"
          />
          <button
            onClick={copyToClipboard}
            className=" bg-transparent border border-gray-800 rounded-md py-1 px-3 btn-bg"
          >
            <AiTwotoneCopy />
          </button>
        </div>

        <div className=" flex flex-col sm:flex-row justify-center gap-10 mt-[3rem]">
          <div className=" flex justify-center sm:justify-normal items-center gap-4">
            <p className=" text-xl font-mon">Audited by: </p>
            <img src="images/coin.png" alt="" className=" h-[40px]" />
          </div>

          <div className=" flex items-center justify-center sm:justify-normal gap-4">
            <p className=" text-xl font-mon">Buy on: </p>
            <img src="images/proof.png" alt="" className=" h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomic;

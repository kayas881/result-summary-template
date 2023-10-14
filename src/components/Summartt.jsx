import React from "react";
import Reactioon from "./../assets/images/icon-reaction.svg";
import verbal from "./../assets/images/icon-verbal.svg";
import visual from "./../assets/images/icon-visual.svg";
import memory from "./../assets/images/icon-memory.svg";
const Summartt = () => {
  return (
    <div className="Container">
      <div className="w-[300px] h-[420px] bg-whitee rounded-2xl shadow-lightLavender shadow-2xl">
        <div className="">
          <h1 className="mt-6 ml-6 font-extrabold text-2xl">Summary</h1>
        </div>

        <div className="flex flex-col items-center ">
          <div className="mt-5 h-12 w-[80%] rounded-lg  flex items-center bg-lightred bg-opacity-10 ">
            <img className=" w-5 ml-3 " src={Reactioon} />
            <h1 className="ml-2 text-lightred font-bold  ">Reaction</h1>
            <h1 className=" ml-[70px] text-sm font-extrabold">80</h1>
            <h1 className="text-sm font-extrabold ml-1 opacity-60"> / 90</h1>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="mt-5 h-12 w-[80%] rounded-lg  flex items-center bg-orangeYellow bg-opacity-10 ">
            <img className=" w-5 ml-3 " src={memory} />
            <h1 className="ml-2 text-orangeYellow font-bold  ">Memory</h1>
            <h1 className="ml-[75px] text-sm font-extrabold">92</h1>
            <h1 className="text-sm font-extrabold ml-1 opacity-60"> / 90</h1>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="mt-5 h-12 w-[80%] rounded-lg   flex items-center bg-tealgreen bg-opacity-10 ">
            <img className=" w-5 ml-3 " src={verbal} />
            <h1 className="ml-2 text-tealgreen font-bold  ">Verbal</h1>
            <h1 className="ml-[90px] text-sm font-extrabold">61</h1>
            <h1 className="text-sm font-extrabold ml-1 opacity-60"> / 90</h1>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="mt-5 h-12 w-[80%] rounded-lg  flex items-center bg-lightred bg-opacity-10 ">
            <img className=" w-5 ml-3 " src={visual} />
            <h1 className="ml-2  n font-bold  ">Visual</h1>
            <h1 className="ml-[90px] text-sm font-extrabold">72</h1>
            <h1 className="text-sm font-extrabold ml-1 opacity-60"> / 90</h1>
          </div>
        </div>
        <div className="flex justify-center items-center h-20 ">
          <button className=" bg-royalblue text-whitee w-[80%] h-12 font-bold rounded-3xl text-opacity-80 hover:shadow-lightLavender  hover:shadow-xl">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summartt;

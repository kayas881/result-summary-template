import React from "react";
import font1 from "./../assets/fonts/static/HankenGrotesk-Bold.ttf";

import "./../App.css";
const result = () => {
  return (
    <div className="Container">
      <div className="w-[300px] h-[400px] bg-royalblue rounded-2xl">
        <div className="">
          <h1 className="mt-8 text-center font-medium text-[20px] text-white opacity-70 text-whitee">
            Your Result
          </h1>
          <div className=" mt-10  h-28 flex justify-center">
            <div className=" w-[40%] h-full rounded-full  bg-cobaltblue">
              <h1 className="text-whitee text-4xl font-bold text-center mt-6">
                76
              </h1>
              <p className="text-[14px] font-bold text-center text-whitee text-opacity-40 pb-6">
                of 100%
              </p>
            </div>
          </div>
          <div className="mt-3 ">
            <h1 className="text-center h-8 font-bold text-whitee text-[22px]">
              Great
            </h1>
            <p className=" text-center pt-3 font-medium text-whitee text-opacity-75 text-[14px]">
              You scored higher than 65% of <br />
              the people who have taken <br />
              these tests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default result;

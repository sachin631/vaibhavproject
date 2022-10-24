import React from "react";

function DemoId() {
  return (
    <div>
      <section className="w-[100vw] h-[100vh] bg-black font-[poppins] ">
        <div>
          <img
            src="/images/logo.jpg"
            alt="logo"
            className="md:w-[20%] md:h-[20vh] w-[38%] pt-2 pl-2"
          />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center bg-yellow-400 text-black p-2 font-[poppins] font-bold mt-10">
            {" "}
            #1 Most Trending Book OF ASIA
          </h1>
          <h2 className="text-center  text-white  font-[poppins] font-bold mt-10 tracking-[4px]">
            SPRINTERS <br />
            ONLINE
          </h2>
          <p className=" tracking-[2px] text-white text-center m-2 mt-6 p-3">
            Get your online id from most famous book <br />
            of asia and experience the newest way to invest
            <br /> and win big from live sports.{" "}
          </p>
          <button className="bg-[green] hover:bg-[crimson] active:bg-red-500 text-white p-4 rounded-xl mt-3">
            GET YOUR DEMO ID!
          </button>
        </div>
      </section>
    </div>
  );
}

export default DemoId;

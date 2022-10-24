import React from "react";
import datamap from "./datamap";
// import { ImWhatsapp} from "react-icons/im";

function HowWork() {
  return (
    <div>
        <section className="w-[100vw] h-[120vh] md:h-[150vh] bg-black font-[poppins] ">
            <h1 className="tracking-[2px] text-[orange] text-center pt-4 text-[40px]">
              HOW DOES IT WORK ?
            </h1>
      {
      datamap.map((curelem) => {

        return (
          <a href={curelem.step==="step 1"?"https://wa.me/917206572023":"#" } alt="chat">
            <div className="flex flex-col justify-center items-center mt-8 " id={curelem.step} >
              
                <div className="w-[80%] md:w-[30%] ">
                <div className="text-white bg-[crimson] w-[25%]  p-3 rounded-t-lg">
                  {curelem.step}
                </div>
                <div className="rounded-b-md active:bg-blue-300 text-white bg-[crimson] w-[100%] h-[7re] p-3 flex justify-between items-center gap-16 p-2">
                  {/* <img src="" alt="whatsapp" /> */}
                  <div className='text-center ml-4 text-white '>{curelem.img}</div>
                  <div className="flex flex-col rounded-m">
                    <h1 className="text-center font-extrabold">
                      {curelem.heading}

                    </h1>
                    <p className="text-center">
                      {curelem.paragraph}
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
            </a>
          
        );
      })}
      </section>
    </div>
  );
}

export default HowWork;

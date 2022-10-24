import React from "react";

function Footer() {
  const year=new Date();
  const fullyear=year.getFullYear();
  console.log(fullyear)
  return (
    <footer className="bg-black font-[poppins] pt-5">
      <div className="flex flex-col items-center justify-center ">
        <a href="http://wa.me/917206572023">
          <img src="/images/whatsapp.png" />
        </a>
        <hr className="bg-white h-1 border-white border-[0.1px] w-[80%]" />
        <p className="text-white text-center mt-3">
          THIS WEBSITE IS ONLY FOR 18+ USERS IF YOU ARE FROM TELANGANA, ORISSA,
          ASSAM, SIKKIM, AND NAGALAND PLEASE LEAVE THE WEBSITE IMMEDIATELY.
        </p>
        <div className="flex justify-center items-center mt-3  gap-2">
          <a href="http://wa.me/917206572023">
            <img src="/images/facebook.png" className="max-w-[100px]" />
          </a>
          <a href="http://wa.me/917206572023">
            <img src="../../images/youtube.png" className="max-w-[100px]" />
          </a>
          <a href="http://wa.me/917206572023">
            <img src="../../images/twitter.png" className="max-w-[100px]" />
          </a>
        </div>
        <div className="flex gap-4 justify-center items-start mt-5 ">
            <div className="flex justify-center items-start mt-5 ">
                <img src="../../images/download.png" alt="18"/>
            </div>
            <div className="">
                <h1 className="text-white font-bold text-[40px]">DISCLAIMER</h1>
                <p className="text-white">This website is only for adults,By continuing confirm that you are older then 18 year</p>
            </div>
        </div>
        <div className="text-white w-[100vw] pt-4">
           <hr className="bg-white h-1 border-white border-[0.1px] w-[100%]" />
           <div className="text-center">copyright @{fullyear} </div>
           <h1 className="text-center">Designed by Sachin sangwan</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

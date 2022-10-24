import React from 'react'
import WhyUsMap from './WhyUsMap'
function WhyUs() {
  return (
    <section className='w-[100vw]  bg-blue-500 px-2 pt-6 font-[poppins] pb-4'>
    <h1 className='text-white text-center text-[40px]'>Why Sprinters Online?</h1>
    <div className='grid grid-cols-12  gap-2 mt-2 '>
{WhyUsMap.map((curelem)=>{
    return(
       
       
       
            <div className='md:col-span-4 col-span-12 bg-black bg-opacity-80 p-8 md:h-[18rem] h-[20rem] '>
                <div className='flex justify-start items-center justify-between gap-2'>
                    <div className='text-white min-w-[4rem]'><img src={curelem.logo} alt="logo"/></div>
                    <div className="text-white">
                        <h1 className='font-bold text-center'>{curelem.heading}</h1>
                        <p className='text-center w-[13re] '>{curelem.paragraph}</p>
                    </div>
                </div>
            </div>
       
       
    )
})}
       
       </div>
    </section>
  )
}

export default WhyUs
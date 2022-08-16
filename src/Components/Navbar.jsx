import React from 'react';
function Navbar({name,position}) {
  return (
    <div className='bg-[#FFFEFE] text-2xl font-bold flex h-20 items-center justify-center border-b-2 border-[#cccce4]'>
        <div className='w-12 h-12 ml-8 mr-2 mt-2 self-center bg-[#E2E2EA] rounded-lg'>
        </div>
                Dazzie
                <img className='ml-auto' src="/Notification Bell.svg" alt="Notification Bell"/>
                <div className='w-12 h-12 ml-4 bg-[#E2E2EA] rounded-full'>
                </div>
                <div className='flex flex-col ml-4 mr-6 text-base'>
                <>
                {name}
                </>
                <div className='text-[#92929d] text-xs text-start'>
                {position}
                </div>
                </div>
    </div>
  )
}

export default Navbar
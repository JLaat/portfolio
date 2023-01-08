import React from 'react'

const Info = () => {
  return (
    <div className='infoWrapper flex h-[100vh]'>
        <div className="infoLeft basis-1/2 p-10">
            <h2 className='flex-1 text-[4em] font-poppins'>Hello 👋</h2>
            <h2 className='flex-1 text-[3.5em] font-poppins'>I'm Joni</h2>
            <div className="title h-[50px] overflow-hidden">
            <div className='titleWrapper flex-1'>
            <h3 className="titleItem flex items-center justify-center text-blue-600 text-[30px] h-[50px]">Student</h3>
            <h3 className="titleItem flex items-center justify-center text-blue-600 text-[30px] h-[50px]">Career Changer</h3>
            <h3 className="titleItem flex items-center justify-center text-blue-600 text-[30px] h-[50px]">Nice Guy</h3>
            <h3 className="titleItem flex items-center justify-center text-blue-600 text-[30px] h-[50px]">Nice Guy</h3>
            <h3 className="titleItem flex items-center justify-center text-blue-600 text-[30px] h-[50px]">Nice Guy</h3>
            </div>
            </div>
            <div className='flex text-[2em] font-poppins'>An enthusiastic IT student from Finland. Currently my mind is focused on learning Web Development.</div>
        </div>
        <div className="infoRight"></div>
    </div>
  )
}

export default Info
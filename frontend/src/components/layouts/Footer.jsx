import React from 'react'

function Footer() {
  return (
    <>
      <div  className='bg-gray-900 items-center font-light h-30 w-full m-3 flex flex-col'>
        <div className='text-amber-50 m-1'>
            <h3>Let's Connect</h3>
            <p className='text-xs'>Everyone has some interest mine is Macrame. Your's?</p>
        </div>

        <div>
            <button className='w-50 h-5 bg-amber-50 rounded-2xl text-xs text-left pl-2 text-gray-500 font-mono'>Email Here
            </button>
        </div>
        <div className='text-gray-500 m-1 text-xs p-3'>
            <a href="" className='p-3' >Facebook</a>
            <a href="" className='p-3'>What'sapp</a>
            <a href="" className='p-3'>Twitter</a>
            <a href="" className='p-3'>Instagram</a>
        </div>
      </div>
    </>
  )
}

export default Footer

import React from 'react'
import { Link, useParams } from "react-router-dom";

function ErrorPage() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className='text-[4rem] text-error font-bold tracking-wider'>404</p>
      <p className='text-[3rem]'>Page Not Found</p>
      <Link to='/'>
      <button className='my-5 btn bg-white rounded-full text-black hover:bg-white'>Back to Login Page</button>
      
      </Link>
    </div>
  )
}

export default ErrorPage

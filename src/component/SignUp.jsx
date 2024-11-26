import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex place-self-center'>
        <div className='bg-white place-self-center mt-10 rounded-lg h-[420px]'>
            <h2 className='text-3xl place-self-center'>Register</h2>
            <form>
                <div className='m-3'>
                    <label htmlFor="email">
                        <h3 className='text-2xl font-semibold'>Name:</h3>
                    </label>
                    <input type="text"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className=' rounded-md bg-slate-200 p-3 outline-none w-[20em] max-w-md '
                    />
                </div>

                <div className='m-3'>
                    <label htmlFor="email">
                        <h3 className='text-2xl font-semibold'>Email::</h3>
                    </label>
                    <input type="email"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className=' rounded-md bg-slate-200 p-3 outline-none w-[20em] max-w-md '
                    />
                </div>

                <div className='m-3'>
                    <label htmlFor="email">
                        <h3 className='text-2xl font-semibold'>Password:</h3>
                    </label>
                    <input type="password"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className=' rounded-md bg-slate-200 p-3 outline-none w-[20em] max-w-md '
                    />
                </div>
                <button className='bg-blue-500 p-3 flex justify-self-center rounded-lg px-8 text-white transition-all duration-300 hover:scale-110'>Register</button>
            </form>
       
            <p  className=' text-gray-400 m-2 '>already have an account click here: <span><Link to="/login" className='text-blue-700 font-semibold hover:underline'>Login</Link></span></p>
        </div>
    </div>
  )
}

export default SignUp
import React from 'react'

const Login = () => {
  return (
    <div>
         <div className='flex place-self-center'>
        <div className='bg-white place-self-center mt-10 rounded-lg h-[420px]'>
            <h2 className='text-3xl place-self-center mt-5'>Login</h2>
            <form className='mt-12'>
                <div className='m-3'>
                    <label htmlFor="email">
                        <h3 className='text-2xl font-semibold'>Email:</h3>
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
                <button className='bg-blue-500 p-3 flex justify-self-center 
                rounded-lg px-8 text-white transition-all duration-300 hover:scale-110'>Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
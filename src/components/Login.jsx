import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [message, setMassage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {

        e.preventDefault();

        const data = {
            email,
            password
        }
        console.log(data)
    }

    
    return (
        <section className='h-screen flex items-center justify-center'>

            <div className='max-w-sm border shadow bf-white mx-auto p-8'>
                <h2 className='text-2xl font-semibold pt-5'>Please login</h2>
                <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8' action="">

                    <input onChange={(e)=> setEmail(e.target.value)} className=' w-full bg-gray-100 focus:outline-none px-5 py-3' type="email" id='email' placeholder='Emial Adress' required />
                   
                   
                    <input onChange={(e)=> setPassword(e.target.value)} className=' w-full bg-gray-100 focus:outline-none px-5 py-3' type="password" id='password' placeholder='Password' required />


                    {
                        message && <p className='text-red-500'>{message} </p>
                    }

                    <button className='w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md' type='submit'>Login</button>
                </form>


                <p className='my-5 italic text-sm text-center'>Dont have an acount ?
                    <Link className='text-red-500 px-1 underline hover:text-blue-500' to='/register'>Register</Link> here</p>
            </div>

        </section>
    )
}

export default Login
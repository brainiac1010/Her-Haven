import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/features/auth/authApi';

const Register = () => {

    const [message, setMessage] = useState('');

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  

    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const navigate = useNavigate()

    const handleRegister = async (e) => {

        e.preventDefault();

        const data = {
            username,
            email,
            password
        }
        // console.log(data)


        try {
           await registerUser(data).unwrap();

         
            alert("Registration Successfull!")
            navigate('/login')
        } catch (error) {
            setMessage("Registration  failed")
        }
    }

  
    




    return (
        <section className='h-screen flex items-center justify-center'>

            <div className='max-w-sm border shadow bf-white mx-auto p-8'>
                <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
                <form onSubmit={handleRegister} className='space-y-5 max-w-sm mx-auto pt-8' action="">

                    <input onChange={(e) => setUserName(e.target.value)} className=' w-full bg-gray-100 focus:outline-none px-5 py-3' type="text" id='text' placeholder='Enter our name' name='username' required />

                    <input onChange={(e) => setEmail(e.target.value)} className=' w-full bg-gray-100 focus:outline-none px-5 py-3' type="email" id='email' placeholder='Email Adress' name='email' required />

                    <input onChange={(e) => setPassword(e.target.value)} className=' w-full bg-gray-100 focus:outline-none px-5 py-3' type="password" id='password' placeholder='Password' name='password' required />


                    {
                        message && <p className='text-red-500'>{message} </p>
                    }

                    <button className='w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md' type='submit'>Register</button>
                </form>


                <p className='my-5 italic text-sm text-center'>have an acount ? Please
                    <Link className='text-red-500 px-1 underline hover:text-blue-500' to='/login'>Login</Link> </p>
            </div>

        </section>
    )
}

export default Register
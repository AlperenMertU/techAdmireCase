import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordConfrimError, setPasswordConfrimError] = useState('');
    const [existEmail, setExistEmail] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setExistEmail('Please enter a valid email');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordConfrimError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                name,
                surname,
                email,
                password,
            });

            console.log(response.data);

            if (response.status === 201) {
                navigate('/users');
            }
        } catch (error) {
            console.error('Error:', error);
            console.log(error);
            setExistEmail('An error occurred, please try again');
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg">
            <div className="w-11/12 sm:w-5/12 md:w-3/12 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2xl text-black font-light">Register</h2>
                </div>
                {/* emailError && <div className="text-red-500 text-center">daha önce kullanılmış mail</div> */}
                {existEmail && <div className="text-red-500 text-center">hata</div>}
                {passwordConfrimError && <div className="text-red-500 text-center">şifre uyumlu değil</div>}



                <form className="my-2" onSubmit={handleSubmit}>



                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-11/12 bg-transparent outline-none" type='text' placeholder='John'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>


                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} className="w-11/12 bg-transparent outline-none" type='text' placeholder='Wizard'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>


                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-11/12 bg-transparent outline-none" type='text' placeholder='johnwizard@hotmail.com'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-11/12 bg-transparent outline-none"
                            type='password'
                            placeholder='Password'
                        ></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-lock text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-11/12 bg-transparent outline-none"
                            type='password'
                            placeholder='Confirm Password'
                        ></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-lock text-xl"></i>
                        </div>
                    </div>




                    <div className="mx-5 my-5 py-2">
                        <button type='submit' className="bg-slate-600 w-full h-[35px] rounded-sm text-white">Register</button>
                    </div>

                    <Link to="/" className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
                        <p className="text-sm">already ı have a accont /  login</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;

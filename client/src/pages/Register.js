import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailerror] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, surname, email, password }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
            setEmailerror(error)
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg">
            <div className="w-11/12 sm:w-5/12 md:w-3/12 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2xl text-black font-light">Register</h2>
                </div>
                {emailError && <div className="text-red-500 text-center">daha önce kullanılmış mail</div>}
                {error && <div className="text-red-500 text-center">paasapor aynı değil</div>}


                <form className="my-2" onSubmit={handleSubmit}>



                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-11/12 bg-transparent outline-none" type='text' placeholder='John'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                    </div>


                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} className="w-11/12 bg-transparent outline-none" type='text' placeholder='Wizard'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-xl"></i>
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
                            <i className="fa-solid fa-user text-xl"></i>
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
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>




                    <div className="mx-5 my-5 py-2">
                        <button type='submit' className="bg-slate-600 w-full h-[35px] rounded-sm text-white">Register</button>
                    </div>

                    <Link to="/" className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
                        <p className="text-sm">already ı have a accont / login</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;

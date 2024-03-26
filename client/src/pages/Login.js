import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setErrorMessage("Incorret password or username");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error occurred, please try again');
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg">
            <div className="w-11/12 sm:w-5/12 md:w-3/12 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2xl text-black font-light">Log in</h2>
                </div>

                <form className="my-2" onSubmit={handleSubmit}>
                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-11/12 bg-transparent outline-none"
                        ></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-11/12 bg-transparent outline-none" ></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-lock text-xl"></i>
                        </div>
                    </div>

                    <div className="mx-5 my-5 py-2">
                        <button type="submit" className="bg-slate-600 w-full h-[35px] rounded-sm text-white">Log in</button>
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm justify-center text-center">{errorMessage}</p>}

                    <Link to="/register" className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
                        <p className="text-sm">don't have an account? Register</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;

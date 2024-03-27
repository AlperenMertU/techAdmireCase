import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { setFilteredUsers , setNoData} from '../components/DataSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage("Incorrect password or email");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });

            console.log("response", response);

            if (response.data.status === 200) {
                navigate('/users');
            } else {
                setErrorMessage('User not found');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error occurred, please try again');
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg">
            <div className="w-11/12 sm:w-5/12 md:w-3/12 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2xl text-black font-light">Login</h2>
                </div>

                <form className="my-2" onSubmit={handleSubmit}>
                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input type="text"
                            placeholder="Enter email"
                            autoComplete="on"

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <button type="submit" className="bg-slate-600 w-full h-[35px] rounded-sm text-white">Login</button>
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm justify-center text-center">Invalid email or password</p>}

                    <div className="mx-5 my-5 py-2 flex items-center justify-center">
                        <p className="text-sm">Don't have an account?<Link to="/register"  className='text-blue-500 cursor-pointer'>Register</Link> </p>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;

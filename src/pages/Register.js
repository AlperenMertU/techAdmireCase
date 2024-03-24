import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg">
            <div className="w-11/12 sm:w-5/12 md:w-3/12 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2xl text-black font-light">Sign Up</h2>
                </div>

                <form className="my-2">
                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input className="w-11/12 bg-transparent outline-none" type='text' placeholder='enter your email adress'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input className="w-11/12 bg-transparent outline-none" type='text' placeholder='enter your em ail'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input className="w-11/12 bg-transparent outline-none" type='text' placeholder='enter your em ail'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input className="w-11/12 bg-transparent outline-none" type='password' placeholder='enter your password'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input className="w-11/12 bg-transparent outline-none" type='password' placeholder='confrim your passowr'></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>

                     <Link to="/users">
                     <div className="mx-5 my-5 py-2">
                     <button className="bg-slate-600 w-full h-[35px] rounded-sm text-white">Sign Up</button>
                   </div>
                     </Link>
                 

                    <Link to="/" className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
                      <p className="text-sm">already ı have a accont / sign up</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;

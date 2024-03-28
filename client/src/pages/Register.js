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

    //check email sytnax 
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    //name , surname starting with capital letter 
    const handleChange = (e, setterFunc) => {
        const { value } = e.target;
        setterFunc(value.charAt(0).toUpperCase() + value.slice(1));
    }


    //checks after register submit and than if all iss good navigate to /users
    const handleSubmit = async (e) => {
        e.preventDefault();

        //email aldready exist ? or bad syntax 
        if (!validateEmail(email)) {
            setExistEmail('Please enter a valid email');
            return;
        }

        // passwords is same or emtpy ? 
        if (password !== confirmPassword || password === "") {
            setPasswordConfrimError('password not compatible');
            return;
        }

        //post to backend my state values and 
        try {
            const response = await axios.post('http://localhost:5000/signup', { name, surname, email, password });

            //if the answer is equal to 201 go to /users
            if (response.status === 201) {
                navigate('/users');
            }

        } catch (error) {
            console.error('Error:', error);
            console.log(error);
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg">
            <div className="w-11/12 sm:w-5/12 md:w-3/12 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2xl text-black font-light">Register</h2>
                </div>
                {/* emailError && <div className="text-red-500 text-center">daha önce kullanılmış mail</div> */}
                {existEmail && <div className="text-red-500 text-center">enter a valid email</div>}
                {passwordConfrimError && <div className="text-red-500 text-center">password not compatible</div>}


                <form className="my-2" onSubmit={handleSubmit}>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input
                            name="name"
                            value={name}
                            onChange={(e) => handleChange(e, setName)}
                            className="w-11/12 bg-transparent outline-none"
                            type='text'
                            placeholder='John'
                        ></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input
                            name="surname"
                            value={surname}
                            onChange={(e) => handleChange(e, setSurname)}
                            className="w-11/12 bg-transparent outline-none"
                            type='text'
                            placeholder='Wizard'
                        ></input>
                        <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                    </div>


                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-11/12 bg-transparent outline-none" type='text'
                            placeholder='johnwizard@hotmail.com'>
                        </input>
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

                    <div className="mx-5 my-5 py-2 flex items-center justify-center">
                        <p className="text-sm">Already have an account?<Link to="/" className='text-blue-500 cursor-pointer'>Login</Link></p>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;

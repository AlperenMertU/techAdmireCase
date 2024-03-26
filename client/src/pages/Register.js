import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg">
            <div className="w-11/12 sm:w-5/12 md:w-3/12 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2xl text-black font-light">Register</h2>
                </div>

                <form className="my-2" onSubmit={handleSubmit}>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                    <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-11/12 bg-transparent outline-none" type='text' placeholder='enter your email adress'></input>
                    <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                    </div>


                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                    <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-11/12 bg-transparent outline-none" type='password' placeholder='confrim your password'></input>
                    <div className="w-2/12 flex items-center justify-center">
                            <i className="fa-solid fa-user text-xl"></i>
                        </div>
                    </div>

                    
                    <div className="mx-5 my-5 py-2">
                        <button type='submit' className="bg-slate-600 w-full h-[35px] rounded-sm text-white">REgister</button>
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

'use client'

import Link from 'next/link';
import React, { useState, } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import sign from '/public/image/sign-cover.jpg';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from '../context/AuthContext';


export default function Page() {

    const router = useRouter();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, logIn } = useUserAuth(); // Remove the user variable from here



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            router.push('/');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    return (
        <div >
            <Image className='cover h-full w-full opacity-20 ' src={sign} alt="sign page" height={500} width={500} />
            <div className="absolute top-[15%] left-[35%] w-full max-w-md p-4 m-auto my-6 rounded-md shadow sm:p-8 bg-[#000000] text-white ">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <div className='flex justify-center'>
                    <p className="text-sm text-center text-white  ">Dont have account?
                    </p>
                    <div className='text-[#d92525] text-sm focus:underline hover:underline'>
                        <Link href={"/signup"}>
                            Sign up here
                        </Link>
                    </div>
                </div>
                <div className="my-2 space-y-2">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border-2 rounded-md focus:ri focus:ri text-white  focus:ri">
                        <FcGoogle size={30} />
                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri text-white  focus:ri">
                        <AiFillGithub size={30} />
                        <p>Login with GitHub</p>
                    </button>

                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full  text-white " />
                    <p className="px-3  text-white ">OR</p>
                    <hr className="w-full  text-white " />
                </div>


                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label for="email" className="block text-sm">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md text-black" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs text-[#d92525] hover:underline ">Forgot password?</a>
                            </div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md text-black" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md  bg-[#d92525] text-white">log in</button>
                </form>
            </div>
        </div>




    );
};


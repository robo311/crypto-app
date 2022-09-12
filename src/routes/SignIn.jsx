import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"
import {signIn, UserAuth} from "../context/AuthContext"

function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {signIn} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signIn(email, password)
            navigate("/account")
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }

  return (
    <div className='max-w-[350px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-color font-semibold text-3xl flex justify-center'>Sign in</h1>
        <form onSubmit={handleSubmit}>
            <div className='my-5'>
                <label className='text-color text-xl' htmlFor="email">Email</label>
                <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded-2xl' required id='email' type="email" placeholder='Enter Email' />
                    <AiOutlineMail className='absolute right-4 top-3 text-gray-400'/>
                </div>
            </div>
            <div className='my-5'>
                <label className='text-color text-xl' htmlFor="password">Password</label>
                <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    <input onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border rounded-2xl' required id='password' type="password" placeholder='Enter Password' />
                    <RiLockPasswordLine className='absolute right-4 top-3 text-gray-400'/>
                </div>
            </div>
            <button className='sign-btn' type="submit">Sign in</button>
        </form>
        <p className='my-3 text-gray-500 dark:text-gray-400 text-sm'>
            Don't have an account? <Link className='text-slate-800 font-semibold dark:text-blue-200' to="/signup">Register now!</Link>
        </p>
    </div>
  )
}

export default SignIn
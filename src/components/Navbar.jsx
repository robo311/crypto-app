import React from 'react'
import { CgProfile } from "react-icons/cg"
import { Link, useNavigate } from "react-router-dom"
import Switcher from './Switcher'
import MobileMenu from './MobileMenu'
import {UserAuth} from "../context/AuthContext"

function Navbar() {

    const {user, logout} = UserAuth()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
          await logout()
          navigate("/signin")
        } catch (error) {
          console.log(error.message);
        }
    }

  return (
    <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
        <Link to="/">
            <h1 className='text-2xl'>Coinbase</h1>
        </Link>
        <div className='md:block hidden'>
            <Switcher/>
        </div>
        <div className='md:block hidden'>
            {user?.email ?(
            <div className='flex'>
                <Link to="/account">
                    <CgProfile className='mr-4 mt-1 cursor-pointer' size={26}/>
                </Link>
                <button onClick={handleSignOut}>Log Out</button>
            </div>
            
            ) : (
            <Link to="/signin">
                Sign In
            </Link>)}
        </div>
        <div className='md:hidden block'>
            <MobileMenu signOut={handleSignOut} user={user}/>
        </div>
    </div>
  )
}

export default Navbar
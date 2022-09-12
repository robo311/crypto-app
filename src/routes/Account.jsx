import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import WatchList from '../components/WatchList'
import {UserAuth} from "../context/AuthContext"



function Account() {

const {user, logout} = UserAuth()
const navigate = useNavigate()

const handleSignOut = async () => {
  try {
    await logout()
    navigate("/")
  } catch (error) {
    console.log(error.message);
  }
}

if (user){
  return (
    <div>
      <div className='rounded-div py-8 my-8 min-h-[220px]'>
        <h1 className='text-2xl font-semibold mb-4'>Your account</h1>
        <div className='flex justify-between'>
          <h1 className='text-xl'>Welcome {user?.email}</h1>
          <button className='p-2 rounded-xl text-white font-semibold bg-gray-500' onClick={handleSignOut}>Log Out</button>
        </div>
      </div>
      <WatchList/>
    </div>
  );
} else {
  return <Navigate to="/signin"/>
}

}

export default Account
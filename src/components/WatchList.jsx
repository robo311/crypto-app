import React, { useState, useEffect } from 'react'
import { UserAuth } from "../context/AuthContext"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase"
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai"


function WatchList() {
    const [coins, setCoins] = useState([])
    const { user } = UserAuth()

    useEffect(()=>{
        onSnapshot(doc(db,"user", `${user.email}`), (doc)=> {
          setCoins(doc.data()?.favorites)
        })
    },[user?.email])

    const coinPath = doc(db, "user", `${user?.email}`)
    const deleteCoin = async (id) => {
        try{
            const result = coins.filter((item) => item.id !== id)
            await updateDoc(coinPath, {
                favorites: result
            })
        }catch(e){
            console.log(e)
        }
    }


    return (
        
        <div className='rounded-div py-5 min-h-[305px]'>
            <h1 className='text-2xl font-semibold mb-4'>Watchlist</h1>
            {coins?.length === 0 ? (
            <>
                <p className='mb-2'>You don't have any coins in your watchlist.</p>
                <Link className='text-gray-500' to="/">Click here to add coins.</Link>
            </>
        ) : (
            <div className='flex justify-center'>
                <table>
                    <thead className='dark:text-white'>
                        <tr className='border-b border-b-gray-400 dark:border-b-gray-300'>
                            <th className='text-left'>Rank #</th>
                            <th className='text-left'>Coin</th>
                            <th className='text-left'>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins?.map((coin) => (
                            <tr className='dark:text-white border-b dark:border-b-gray-600 h-[60px]' key={coin.id}>
                                <td className='w-[90px]'>{coin?.rank}</td>
                                <td>
                                    <div className='flex items-center'>
                                        <img className='w-6 mr-2'src={coin.image} alt={coin.id} />
                                        <div className='w-[90px]'>
                                            <Link to={`/coin/${coin.id}`}>{coin?.symbol.toUpperCase()}</Link>
                                        </div>
                                    </div>
                                </td>
                                <td className='w-[100px]'>${coin?.price.toLocaleString()}</td>
                                <td>
                                    <AiOutlineClose size={20} onClick={()=> deleteCoin(coin?.id)} className='ml-5 cursor-pointer'/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
        </div>
        
    )
}

export default WatchList
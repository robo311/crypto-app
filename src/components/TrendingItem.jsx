import React from 'react'
import { FaBitcoin } from "react-icons/fa"
import { Link } from "react-router-dom"


function TrendingItem({coin}) {
  return (
      <div>
        <div className='rounded-div p-3 hover:scale-105 ease-out duration-300'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='rounded-full' src={coin.item.small} alt={coin.item.id} />
                    <div>
                        <Link to={`/coin/${coin.item?.id}`}>
                            <h2 className='font-semibold text-xl'>{coin.item.name}</h2>
                        </Link>
                        <h5 className='text-sm font-bold text-gray-500'>{coin.item.symbol}</h5>
                    </div>
                </div>
                <div className='flex'>
                    <FaBitcoin color='orange' size={15} className="relative top-[6px] right-1"/>
                    <p>{coin.item.price_btc.toFixed(9)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingItem
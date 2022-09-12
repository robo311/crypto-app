import React from 'react'
import Switcher from './Switcher'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillFacebook} from "react-icons/ai"

function Footer() {
  return (
    <div className='rounded-div mt-8 w-ful'>
        <div className='my-5 grid gap-2 md:grid-cols-4 sm:grid-cols-3'>
            <div>
                <h1 className='text-2xl font-semibold'>Coinbase</h1>
                <p className='max-w-[160px] mt-2 text-sm'>Coinbase is crypto site project made by <a href="https://github.com/robo311">robo311</a>.<br/> Website is powered by <a href="https://www.coingecko.com">Coingecko</a> API.</p>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-2'>About</h2>
                <ul className='dark:text-gray-400 text-gray-700'>
                    <li>About us</li>
                    <li>Career</li>
                    <li>Invest</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-2'>Explore</h2>
                <ul className='dark:text-gray-400 text-gray-700'>
                    <li>Crypto</li>
                    <li>Metaverse</li>
                    <li>NFT</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-lg font-semibold'>Subscribe to our newsletter!</h2>
                <div>
                    <input className='py-1 outline-none text-black text-sm rounded-lg indent-3 my-2 bg-slate-200' type="email" placeholder='Enter your email'/>
                </div>
                <div>
                    <button className='text-xs px-3 py-1 dark:bg-slate-700 bg-slate-300 rounded-lg'>Subscribe</button>
                </div>
            </div>
            <div className='flex justify-between col-start-2 col-end-4 md:mt-4 sm:mt-9 mt-[68px]'>
                <AiFillFacebook size={20}/>
                <AiOutlineGithub size={20}/>
                <AiOutlineInstagram size={20}/>
                <AiOutlineTwitter size={20}/>
            </div>
        </div>
        <div className='flex justify-center mb-2 text-xs'>
            <small>Made by <a href="https://github.com/robo311">@robo311</a>. Powered by CoinGecko.</small>
        </div>
    </div>
  )
}

export default Footer
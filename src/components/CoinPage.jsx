import React, { useEffect, useState } from 'react'
import axios from "axios"
import {AiFillCaretUp, AiFillCaretDown} from "react-icons/ai"
import { Sparklines, SparklinesLine} from 'react-sparklines';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading"


function CoinPage() {

    const [data, setData] = useState([])
    const params = useParams()
    const [loading, setLoading] = useState(false)

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

    const coinData = async () => {
        try{
            await axios.get(url)
                .then((response)=>{
                    setData(response.data)
                })
                setLoading(true)      
        }catch(error){
            console.error(`ERROR:  ${error}`)
        }
    }

    useEffect(()=>{
        coinData()
        setLoading(false)
    },[url])

  return (
    <div className='rounded-div mt-6 py-4'>
        {loading ? (
            <div className='flex justify-between'>
            <div className='flex-col'>
                <div className='mt-5 flex'>
                    <img className='w-8 mr-2' src={data.image && data.image.small} alt={data.id}/>
                    <h1 className='font-bold text-xl'>{data.name} ({data.symbol && data.symbol.toUpperCase()})</h1>
                </div>
                <div className='mt-3 flex'>
                    <h1 className='font-bold text-3xl'>${data.market_data?.current_price.usd.toLocaleString()}</h1>
                    <div className='flex ml-2 relative top-1'>
                        {data.market_data?.price_change_percentage_24h > 0 ? <AiFillCaretUp className='relative top-[7px]' color='green'/> : <AiFillCaretDown className='relative top-[7px]' color='red'/>}
                        <p className={data.market_data?.price_change_percentage_24h > 0 ? "text-green-600 font-semibold text-[18px]" : "text-red-600 font-semibold"}>{data.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>
                </div>
                <small>{data.market_data?.current_price.btc} BTC</small>
                <div className='mt-4'>
                    <Sparklines svgWidth={380} data={data.market_data?.sparkline_7d.price}>
                        <SparklinesLine color="lightblue" />
                    </Sparklines>
                </div>
            </div>
            <div className='my-4 hidden sm:block'>
                <h2 className='text-xl font-semibold'>Info</h2>
                <div className='my-1'>
                    <div className='my-2'>
                        <small className='text-gray-600 dark:text-gray-400 font-semibold'>Website</small>
                        <div className='my-1'>
                            <a className='bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold' href={data.links?.homepage[0]}>Official site</a>
                        </div>
                    </div>
                    <div>
                        <small className='text-gray-600 dark:text-gray-400 font-semibold'>Community</small>
                       <div className='grid gap-1 grid-cols-2 my-1'>
                            <a className='bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold' href={data.links?.subreddit_url}>Reddit</a>
                            <a className='bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold' href={`https://www.facebook.com/${data.links?.facebook_username}`}>Facebook</a>
                            <a className='bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold' href={`https://www.twitter.com/${data.links?.twitter_screen_name}`}>Twitter</a>
                            <a className='bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold' href={data.links?.official_forum_url[0]}>Forum</a>
                       </div>
                    </div>
                    <div>
                        <small className='text-gray-600 dark:text-gray-400 font-semibold'>Source code</small>
                        <div className='my-1'>
                            <a className='bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold' href={data.links?.repos_url.github[0]}>Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : (<div className='flex justify-center'>
            <ReactLoading type='spin' color='black'/>
        </div>)}
        {data.market_data && (
            <div className='grid gap-3 md:grid-cols-2 sm:grid-cols-1 mt-4'>
                <div className='border-b'>
                    <h4 className='text-gray-500 dark:text-gray-400 text-sm'>Market Cap</h4>
                    <p className='font-semibold'>${data.market_data.market_cap.usd.toLocaleString()}</p>
                </div>
                <div className='border-b'>
                    <h4 className='text-gray-500 dark:text-gray-400 text-sm'>24 Hour Trading Volume</h4>
                    <p className='font-semibold'>${data.market_data.total_volume.usd.toLocaleString()}</p>
                </div>
                {data.market_data.fully_diluted_valuation.usd && 
                    <div className='border-b'>
                        <h4 className='text-gray-500 dark:text-gray-400 text-sm'>Fully Diluted Valuation</h4>
                        <p className='font-semibold'>${data.market_data.fully_diluted_valuation.usd.toLocaleString()}</p>
                    </div>
                }
                <div className='border-b'>
                    <h4 className='text-gray-500 dark:text-gray-400 text-sm'>Circulating Supply</h4>
                    <p className='font-semibold'>{data.market_data.circulating_supply.toLocaleString()}</p>
                </div>
                <div className='border-b'>
                    <h4 className='text-gray-500 dark:text-gray-400 text-sm'>24h High</h4>
                    <p className='font-semibold'>${data.market_data.high_24h.usd.toLocaleString()}</p>
                </div>
                <div className='border-b'>
                    <h4 className='text-gray-500 dark:text-gray-400 text-sm'>24h Low</h4>
                    <p className='font-semibold'>${data.market_data.low_24h.usd.toLocaleString()}</p>
                </div>
            </div>
            )}
        {loading && <div>
            <h1 className='text-2xl font-semibold mt-8 mb-4'>About {data.name} ({data.symbol?.toUpperCase()})</h1>
            <div className='about-text whitespace-pre-wrap tracking-wide' dangerouslySetInnerHTML={{__html: data.description?.en}}></div>
        </div>}
    </div>
  )
}



export default CoinPage
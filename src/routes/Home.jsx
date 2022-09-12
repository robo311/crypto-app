import React from 'react'
import Coins from '../components/Coins'
import Trending from '../components/Trending'

function Home(props) {
  return (
    <div>
        <Coins coins={props.coins}/>
        <Trending/>
    </div>
  )
}

export default Home
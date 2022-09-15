import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import CoinPage from "./components/CoinPage";
import Footer from "./components/Footer";
import SignUp from "./routes/SingUp";
import Account from "./routes/Account";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  const [data, setData] = useState([])
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"

  useEffect(()=>{
    axios.get(url)
      .then((response) => {
        setData(response.data)
      })
  },[url])

  return (
    <AuthContextProvider>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home coins={data}/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/coin/:coinId" element={<CoinPage/>}>
            <Route path=":coinId"/>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </AuthContextProvider>
  );
}

export default App;

import { useState } from "react";
import { motion } from "framer-motion";
import { ethers } from "ethers";
import monadlisa from "./monadlisa.png"; 
export default function App() {
  const [account, setAccount] = useState(null);


  const connectWallet = async () => {
    if (window.ethereum) {
      try {

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });


        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error("Error connecting to wallet", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };


  const disconnectWallet = () => {

    setAccount(null);


  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white overflow-hidden"
      style={{ backgroundColor: "#863EDF" }} 
    >
      <h1 className="text-4xl font-bold text-center mb-8">
        A masterpiece on Monad Testnet, blending the legendary Pepe <br />
        with the timeless elegance of the Mona Lisa.
      </h1>
      
      {/* Connect/Disconnect Wallet Button */}
      {!account ? (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition mb-8"
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p className="mb-4">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
          <button
            onClick={disconnectWallet}
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
          >
            Disconnect Wallet
          </button>
        </div>
      )}

      <div className="relative w-full overflow-hidden h-48 flex items-center">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...Array(10)].map((_, i) => (
            <img key={i} src={monadlisa} alt="Monad Lisa Token" className="w-48 mx-2" />
          ))}
          {[...Array(10)].map((_, i) => (
            <img key={i + 10} src={monadlisa} alt="Monad Lisa Token" className="w-48 mx-2" />
          ))}
        </motion.div>
      </div>
      
      <a 
        href="https://magiceden.io/mint-terminal/monad-testnet/0x2f6f5c08871a2eb6400a8210841c1661d7d25e5a" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-pink-300 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
      >
        Bag some!
      </a>
    </div>
  );
}

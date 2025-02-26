import { motion } from "framer-motion";
import monadlisa from "./monadlisa.png"; // Ensure you place monadlisa.png inside src folder

export default function App() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white overflow-hidden"
      style={{ backgroundColor: "#863EDF" }} // Replace with your desired purple shade
    >
      <h1 className="text-4xl font-bold text-center mb-8">
        A masterpiece on Monad Testnet, blending the legendary Pepe <br />
        with the timeless elegance of the Mona Lisa.
      </h1>
      
      <div className="relative w-full overflow-hidden h-48 flex items-center">
        <motion.div
          className="flex"
          animate={{ x: [0, "-100%"] }}
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
        href="https://your-buylink.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-pink-300 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
      >
        Bag some!
      </a>
    </div>
  );
}
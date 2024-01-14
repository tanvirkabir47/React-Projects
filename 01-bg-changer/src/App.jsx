import { useState } from "react"


function App() {

  let [color, setColor] = useState("#000")

  return (
    <>
      <div className="h-screen w-full relative" style={{backgroundColor: color}}>
          <div className="flex justify-center">
            <div className="bg-white absolute m-auto bottom-12 left-[50%] translate-x-[-50%] py-2 px-4 rounded-none md:rounded-full flex-col flex justify-center md:flex-row w-full md:w-auto">
              <button onClick={()=>{setColor("rgb(153 27 27)")}} className="bg-red-800 font-semibold text-white py-1 px-3 rounded-full mx-2 my-1">Red</button>
              <button onClick={()=>{setColor("rgb(22 101 52)")}} className="bg-green-800 font-semibold text-white py-1 px-3 rounded-full mx-2 my-1">Green</button>
              <button onClick={()=>{setColor("rgb(30 64 175)")}} className="bg-blue-800 font-semibold text-white py-1 px-3 rounded-full mx-2 my-1">Blue</button>
              <button onClick={()=>{setColor("rgb(107 33 168)")}} className="bg-purple-800 font-semibold text-white py-1 px-3 rounded-full mx-2 my-1">Purple</button>
              <button onClick={()=>{setColor("rgb(133 77 14)")}} className="bg-yellow-800 font-semibold text-white py-1 px-3 rounded-full mx-2 my-1">Yellow</button>
              <button onClick={()=>{setColor("rgb(154 52 18)")}} className="bg-orange-800 font-semibold text-white py-1 px-3 rounded-full mx-2 my-1">Orange</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App

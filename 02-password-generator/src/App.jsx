import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordCopy = useRef(null)
  const passwordCopyBtn = useRef("")
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const copyPasswordValue = useCallback(()=>{
    passwordCopy.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopyButtonText("Copied!");

    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 2000);
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  }, [length, number, character, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  return (
    <>
      <div className="h-screen bg-black flex items-center justify-center">
          <div className="bg-white w-1/2">
            <div className="p-4">
              <h2 className="text-4xl font-bold text-center mb-3">Password Generator</h2>
              <div className="flex">
                <input
                className="bg-black text-white py-2 px-3 w-full outline-none"
                type="text"
                placeholder="Password"
                value={password}
                ref={passwordCopy}
                readOnly
                />
                <button onClick={copyPasswordValue} ref={passwordCopyBtn} className="bg-blue-500 px-3 text-white font-semibold">{copyButtonText}</button>
              </div>
              <div className="mt-3 flex gap-5">
                <div className="flex gap-1 items-center">
                  <input 
                  min={8}
                  max={16}
                  type="range"
                  value={length}
                  onChange={(e)=> {setLength(e.target.value)}}
                  />
                  <label htmlFor="" className="font-semibold">length: ({length})</label>
                </div>
                <div className="flex gap-1">
                  <input
                  id="number"
                  onChange={()=> {
                    setNumber((prev)=> !prev)
                  }}
                  type="checkbox" 
                  defaultChecked={number}
                  />
                  <label htmlFor="number" className="font-semibold cursor-pointer">Number</label>
                </div>

                <div className="flex gap-1">
                  <input
                  id="character"
                  onChange={()=> {
                    setCharacter((prev)=> !prev)
                  }}
                  type="checkbox" 
                  defaultChecked={character}
                  />
                  <label htmlFor="character" className="font-semibold cursor-pointer">Special Character</label>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App

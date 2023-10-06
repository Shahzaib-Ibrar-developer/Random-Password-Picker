import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("")
  const [length, setLength] = useState(10)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)

  const RandomHandler = () => {
    let give = ""
    let pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let characterslength = pass.length

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterslength)
      give += pass.charAt(randomIndex)
    }
    setInputValue(give)



    if (characters) {
      let chara = "';[}=-/*!£$%^^"

      give += chara
      setInputValue(give)
    }

    if (numbers) {
      let numbero = "1234567890"
      give += numbero
      setInputValue(give)
      
    }
  }

  const CopyData = () => {
    const data = window.navigator.clipboard;
    data.writeText(inputValue).then(() => {
              alert("Password Copied to Clipboard" + inputValue)
    }).catch((error) => {
      alert(error)
    });
  };
  
  useEffect(() => {
    RandomHandler();
  }, [length, characters, numbers, setInputValue])


  return (
    <>
      <h1 className='first'>Random Password Generator</h1>

      <div className='mainDiv'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='btn' onClick={()=>{
          CopyData();
        }}>Copy</button>
      </div>

      <div className='SecondDiv'>

        <input
          type='range'
          min={0}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <label>Length({length})</label>

        <input
          type='checkbox'
          value={numbers}
        onChange={(e)=>setNumbers(e.target.checked)}
        />
        <label>Numbers</label>

        <input
          type='checkbox'
          value={characters}
        onChange={(e)=>setCharacters(e.target.checked)}
        />
        <label>Characters</label>
      </div>


    </>
  );
}

export default App;

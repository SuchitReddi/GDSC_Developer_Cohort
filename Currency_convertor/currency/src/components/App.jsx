import React from "react";
import Currcomp from "./Currcomp";
import Convertedcomp from "./Convertedcomp";
import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState([]);
  const [isoCode1, setIsoCode1] = useState('');
  const [isoCode2, setIsoCode2] = useState('');
  const [value, setValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" + isoCode1 + "/" + isoCode2 + ".json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const rate = Object.values(data)[1];
        setRate(rate);
      })
      .catch(error => console.error(error));
  }, [isoCode1, isoCode2]);

  

  const handleIsoCode1Change = (event) => {
    setIsoCode1(event.target.value);
  }

  const handleIsoCode2Change = (event) => {
    setIsoCode2(event.target.value);
  }

  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    const convertedValue = value * rate;
    setConvertedValue(convertedValue);
  }

  return( 
    <div className="outer-box">
        <h1 id="kodaka">BASIC CURRENCY CONVERTOR</h1>
          <div className="holder">    
            <Currcomp name={"enter value"} onCodeChange={handleIsoCode1Change} onEnterValue={handleValue}/>
            <Convertedcomp val={convertedValue} onCodeChange={handleIsoCode2Change}/>
          </div>
          <button type="button" onClick={handleSubmit}>Submit</button>
          {/* <p className="para2">value is {value}</p> */}
    </div>
  )
}

export default App;
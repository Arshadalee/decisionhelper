import React, { useState } from "react";
import "./Home.css";
import Done from "./Done.jsx";
import OptionTwo from "./Option2/OptionTwo";

const wstyle = {
  TextDecoder: "none",
  backgroundColor: "green",
  width: "2000px",
  padding: "0",
};

function Home() {
  const [inputValue, setInputValue] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [doneResult, setDoneResult] = useState(0);
  const [optionTwoResult, setOptionTwoResult] = useState(0);
  const [trigger, setTrigger] = useState(true);
  
  const handleInputOne = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputTwo = (e) => {
    setInputValue2(e.target.value);
  };

  return (
    <>
      <center>
        <h2>Welcome</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputOne}
          placeholder="Type something..."
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        />

        <br />
        <input
          type="text"
          value={inputValue2}
          onChange={handleInputTwo}
          placeholder="Type something..."
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        />

        <h1>Decision Helper</h1>
        <div className="container mainPage" style={wstyle}>
          <div className="row">
            <div className="col-md-6 Dtwocol">
              <center>
                <h1 className="Dname">{inputValue}</h1>
              </center>
              
              <Done 
              trigger={trigger} setTrigger={setTrigger}
              className="Done1" segment={inputValue} setDoneResult={setDoneResult}/>
            </div>
            <div className="col-md-6 Dtwocol">
              <center>
                {" "}
                <h1 className="Dname">{inputValue2}</h1>
              </center>
              <OptionTwo
              trigger={trigger} setTrigger={setTrigger}
              className="Done1" segment={inputValue2} setOptionTwoResult={setOptionTwoResult}/>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
export default Home;

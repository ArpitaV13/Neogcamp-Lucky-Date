import { useState } from "react";
import "./styles.css";
import bck from "/src/bck.svg";
import lucky from "/src/lucky.svg";
import unlucky from "/src/unlucky.svg";

var inputDate = "";
var luckyNum = 0;
const luckyDiv = (
  <img alt="luckyImage" src={lucky} height="200px" width="100%" />
);
const unluckyDiv = (
  <img alt="unluckyImage" src={unlucky} height="200px" width="100%" />
);

export default function App() {
  const [displayResult, setDisplayResult] = useState([" ", " "]);
  const [displayAlert, setDisplayAlert] = useState("");

  function checkBtnHandler() {
    console.log("check");
    const dataArray = inputDate.split("-");
    let sum = 0;
    dataArray.map((string) => {
      for (var i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });
    if (sum % Number(luckyNum) === 0) {
      setDisplayResult(["Hurray! You are a lucky Person", luckyDiv]);
    } else {
      setDisplayResult(["Oops! You are an unlucky Person", unluckyDiv]);
    }
  }
  return (
    <div className="App">
      <div
        className="background"
        style={{
          backgroundImage: `url("${bck}")`
        }}
      >
        <div className="content">
          <h1>Is your Birthday Lucky? Let's find it out!</h1>
          <div className="birthdate">
            <div id="alertWindow" style={{ display: `${displayAlert}` }}>
              <div id="alert-content">
                <strong> Privacy Notice! </strong>
                We do not store any data.
                <div
                  onClick={() => {
                    setDisplayAlert("none");
                  }}
                  style={{ display: "inline", cursor: "pointer" }}
                >
                  <span role="img" aria-labelledby="crossIcon">
                    &#10060;
                  </span>
                </div>
              </div>
            </div>
            <h2> Enter your birth-date:</h2>
            <input
              id="birthdate-input"
              onChange={(e) => {
                inputDate = e.target.value;
              }}
              type="date"
              required
            ></input>
          </div>
          <h2> Enter your lucky number </h2>
          <div className="luckynumber">
            <input
              id="lucky"
              onChange={(e) => {
                luckyNum = e.target.value;
              }}
              type="number"
              required
            ></input>
          </div>
          <button onClick={checkBtnHandler}>Check</button>
          <div className="output">
            <div className="label">{displayResult[0]}</div>
            {displayResult[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./styles.css";
import bck from "/src/bck.svg";
import lucky from "/src/lucky.svg";
import unlucky from "/src/unlucky.svg";

var inputDate = "";
var luckyNum = 0;



export default function App() {
  const [displayResult , setDisplayResult]= useState([" "," "]);
function checkBtnHandler(){
    const dataArray=inputDate.split("-");
    let sum=0;
    dataArray.map((string)=>{
    for(var i=0;i<string.length;i++){
      sum=sum+Number(string[i]);
}
}
);
if(sum%luckyNum===0){
setDisplayResult(["Hurray! You are a lucky Person",lucky]);
}
else{
  setDisplayResult(["Oops! You are an unlucky Person",unlucky])
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
          <div clasName="birthdate">
            <h2> Enter your birthdate</h2>
            <input id="birthdate-input"
            onChange={(e)=>{
              luckyNum=e.target.value;
            }} 
            type="date"
            required>
            </input>

            </div>
            <h2> Enter your lucky number </h2>
            <div clasName="luckynumber">
            
            <input id="birthdate-input" 
            onChange={(e)=>{
                inputDate=e.target.value;
            }}
            type="number"
            required>
            </input>

            </div>
            <button onClick={checkBtnHandler}>Check</button>
        </div>
       
         
        </div>
      </div>
  );
}

import { useState } from "react";

export const FunctionalTrafficLight = () => {
const [color,setColor] = useState(0);
const light = ['red','yellow','green',];
const increment = ()=>{setColor(color + 1) };
const resetOrContinue = color === 3 ? setColor(0) : color;
const change = light[resetOrContinue];

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className = {`circle ${color === 0 ? change : 'black'  }`} ></div>
        <div className= {`circle black ${color === 1 ? change : 'black'  }`}></div>
        <div className= {`circle black ${color === 2 ? change : 'black'  }`}></div>
      </div>
      <button className="next-state-button" onClick={increment}>Next State</button>
    </div>
  );
};




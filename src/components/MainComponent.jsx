import './MainComponent.css'

import { useState } from "react";

const MainComponent = () => {
  const [lastWeight, setLastWeight] = useState();
  const [lastReps, setLastReps] = useState();
  const [result, setResult] = useState('');

 const overload = (weight, reps) => {
  if (reps < 8) {
    return `Increase reps to 12`;
  } else if (reps >= 8 && reps < 12) {
    return `Try to reach 12 reps`;
  } else if (reps >= 12) {
    const roundToNearest = (num, step) => Math.round(num / step) * step;
    const increaseWeight = roundToNearest(weight + 2.5, 2.5);
    return `Increase weight to ${increaseWeight}`;
  } else {
    return `Give valid inputs`;
  }
};


  const handleInput = (e) => {
    e.preventDefault();
    const resultMessage = overload(Number(lastWeight), Number(lastReps));
    setResult(resultMessage);
    setLastReps('');
    setLastWeight('');    
  };

  return (
    <div className="form-wrapper">
        <form >
             <div className="form-group">
                <label htmlFor="weight">Last Used Weight: </label>
                <input type="number" id="weight" className="input-fields" value={lastWeight} onChange={(e) => setLastWeight(Number(e.target.value))}/>
            </div>
            <br />

             <div className="form-group">
                <label htmlFor="reps">Last Reps: </label>
                <input type="number" id="reps" className="input-fields" value={lastReps} onChange={(e) => setLastReps(Number(e.target.value))}/>
            </div>

            <button className="submit-btn" onClick={handleInput} >Find Overload!</button>

            {result && <p className="result-text">{result}</p>} 


        </form>
    </div>
  )
}

export default MainComponent;
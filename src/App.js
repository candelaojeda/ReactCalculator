import React, {useState} from "react";
import './App.css';

const App = () => {
  const [result, setResult] = useState("");
  const buttonClick = (b) =>{
    setResult(result.concat(b.target.name));
  }
  const deletekey = () =>{
    setResult(result.slice(0, result.length - 1)); //o directamente -1(sin el result.length)
  }
  const allclean = () =>{
    setResult("");
  }
  const finallycalculate = () =>{
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult("ERROR");
    }
  }
  return (
    <div>
      <div className="container">
        <h1 className="title">CALCULATOR REACT</h1>
        <form>
          <input type="text" value={result}/>
        </form>

        <div className="keys">
          <button onClick={deletekey} id="keydelete">DELETE</button>
          <button onClick={allclean} id="clean">CLEAR</button>
          <button name="/" onClick={buttonClick}>&divide;</button>
          <button name="7" onClick={buttonClick}>7</button>
          <button name="8" onClick={buttonClick}>8</button>
          <button name="9" onClick={buttonClick}>9</button>
          <button name="-" onClick={buttonClick}>&ndash;</button>
          <button name="4" onClick={buttonClick}>4</button>
          <button name="5" onClick={buttonClick}>5</button>
          <button name="6" onClick={buttonClick}>6</button>
          <button name="+" onClick={buttonClick}>+</button>
          <button name="1" onClick={buttonClick}>1</button>
          <button name="2" onClick={buttonClick}>2</button>
          <button name="3" onClick={buttonClick}>3</button>
          <button name="*" onClick={buttonClick}>&times;</button>
          <button name="0" onClick={buttonClick}>0</button>
          <button name="." onClick={buttonClick}>.</button>
          <button onClick={finallycalculate} id="equal">=</button>
        </div>
      </div>
    </div>
  );
}
export default App;

import React, {useState} from "react";
import './App.css';

const App = () => {
  const [result, setResult] = useState("");
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" value={result}/>
        </form>

        <div className="keys">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>&times;</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>&divide;</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;

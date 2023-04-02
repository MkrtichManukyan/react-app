import Bye from './Bye';
import './App.css';
import {startTransition, useState} from 'react';

function App() {
  let apranq = "Capes";
  const [valu, setValue] = useState("");

  return (
    <div className='App'>
      <Bye cape={apranq} />
      
      <button onClick={() => {
        alert("hello")
      }}>click me</button>

      <input type='text' value={valu} onChange={(val) => {
        setValue(val.target.value);
      }} /> 
      
      <h1>{valu}</h1>
    </div>
  );
}

export default App;

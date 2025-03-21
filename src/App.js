import logo from './logo.svg';
import './App.css';
import Result from './Result';
import { useState } from 'react';

const secretnum = Math.floor(Math.random() * 10) + 1;
function App() {

    const [number,setNumber] = useState();
	function handleChange(e){
		setNumber(e.target.value);
	}
	
  return (
    <div className='container'>
      <div className='head'>
        <label htmlFor='term'>Guess the Number Between 1 to 10 : </label>
		<input 
            id='term'
			name='term'
			onChange={handleChange}
			/>
	  </div>
	  <Result secretnum = {secretnum} number = {number} />
    </div>
  );
}

export default App;

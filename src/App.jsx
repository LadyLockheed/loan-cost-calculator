import { useState } from 'react';
import Slider from './Components/Rangeslider/Slider';
import './App.css';
import './Components/Rangeslider/SliderWrapper.css'

function App() {
  const [amount, setAmount] = useState();
  const [periodRange, setPeriodRange] = useState();
console.log(amount)
console.log(periodRange)
  return (
    <div className="main-container">
    <h1>Loan calculator</h1>
      <div className='slider-wrapper'>
        <Slider 
          value={amount} 
          setValue={setAmount}
          min={'20000'}  
          max={'200000'}
          step={'10000'}
          label={'Loan amount'}
          />
        <Slider 
          value={periodRange} 
          setValue={setPeriodRange}
          min={'2'}  
          max={'10'}
          step={'1'}
          label={'Range period in years'}
          />
      </div>
    </div>
  );
}

export default App;

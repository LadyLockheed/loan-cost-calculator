import { useState, useEffect } from 'react'
import Slider from './Components/Rangeslider/Slider'
import Infobox from './Components/Infobox/Infobox'
import Button from './Components/Button/Button'
import { countMonthlyCost } from './Utils/CostCalculations.js'
import './App.css';
import './Components/Rangeslider/SliderContainer.css'

function App() {

  const [amount, setAmount] = useState(20000);
  const [periodRangeInYear, setPeriodRangeInYear] = useState(2);
  const [amountPerMonth, setAmountPerMonth] = useState()

  const baseURL='/loan-application/'

  useEffect(()=> {

    setAmountPerMonth(countMonthlyCost(amount, periodRangeInYear))
    
  },[amount, periodRangeInYear])

  return (
    <div className="main-container">

      <h1>Loan calculator</h1>

      <Infobox amountPerMonth={amountPerMonth}/>

      <div className='slider-container'>
          <Slider
            value={amount} 
            setValue={setAmount}
            min={'20000'}  
            max={'200000'}
            step={'10000'}
            label={'Loan amount'}
            unit={'SEK'}
            />
          <Slider 
            value={periodRangeInYear} 
            setValue={setPeriodRangeInYear}
            min={'2'}  
            max={'10'}
            step={'1'}
            label={'Range period'}
            unit={'years'}

            />
        </div>

      <Button
        label={'To the application'}
        url={`${baseURL}?amount=${amount}&months=${periodRangeInYear * 12}`}
      />

    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import Slider from './Components/Rangeslider/Slider'
import Infobox from './Components/Infobox/Infobox'
import './App.css';
import './Components/Rangeslider/SliderContainer.css'


function App() {
  const [amount, setAmount] = useState(20000);
  const [periodRangeInYear, setPeriodRangeInYear] = useState(2);
  const [amountPerMonth, setAmountPerMonth] = useState()

  const countMonthlyCost = (amount, periodRangeInYear) => {
    const yearlyInterest = 9.9/100
    const monthlyInterest = yearlyInterest / 12
    const amountOfMonths = periodRangeInYear * 12
    const calculatedResult = amount * monthlyInterest * (Math.pow((1+ monthlyInterest), amountOfMonths)) / (Math.pow((1+monthlyInterest), amountOfMonths))-1

    console.log(calculatedResult)
    return calculatedResult
    
  
  }

  useEffect(()=> {
    console.log('chaning')
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

    </div>
  );
}

export default App;

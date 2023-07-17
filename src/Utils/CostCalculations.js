
   export const countMonthlyCost = (amount, periodRangeInYear) => {

    const yearlyInterest = 9.9/100
    const monthlyInterest = yearlyInterest / 12
    const amountOfMonths = periodRangeInYear * 12
    const calculatedResult = amount * monthlyInterest * (Math.pow((1+ monthlyInterest), amountOfMonths)) / (Math.pow((1+monthlyInterest), amountOfMonths))-1
 
    return Math.round(calculatedResult)
}

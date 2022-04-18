import { useState, useEffect } from 'react'
import Header from './Header/Header'
import Input from './Input/Input'

function App() {
  const [currency, setCurrency] = useState([])
  const [amountFrom, setAmountFrom] = useState(1)
  const [amountTo, setAmountTo] = useState(true)
  const [currencyFrom, setCurrencyFrom] = useState()
  const [currencyTo, setCurrencyTo] = useState()
  const [exchangeRateSelect1, setExchangeRateSelect1] = useState()
  const [exchangeRateSelect2, setExchangeRateSelect2] = useState()

  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(response => response.json())
      .then(data => {
        let a = data[0]
        setCurrency(data)
        setCurrencyTo(a.ccy)
        setExchangeRateSelect1(a.sale)
      })
  }, [])

  let toAmount, fromAmount
  if (amountTo) {
    fromAmount = amountFrom
    toAmount = (amountFrom * exchangeRateSelect1 / exchangeRateSelect2).toFixed(3)
  } else {
    toAmount = amountFrom
    fromAmount = (amountFrom / exchangeRateSelect2 * toAmount).toFixed(3)
  }

  const handleFromAmountChange = e => {
    setAmountFrom(e.target.value)
    setAmountTo(true)
  }

  const handleToAmountChange = e => {
    setAmountFrom(e.target.value)
    setAmountTo(false)
  }

  useEffect(() => {
    if (currencyFrom != null) {
      let a = currency.find(element => element.ccy === currencyFrom)
      if (currencyFrom === 'UAH') {
        setExchangeRateSelect1(1)
      } else (
        setExchangeRateSelect1(a.sale)
      )
    }
  }, [currencyFrom])

  useEffect(() => {
    if (currencyTo != null) {
      let a = currency.find(element => element.ccy === currencyTo)
      if (currencyTo === 'UAH') {
        setExchangeRateSelect2(1)
      } else (
        setExchangeRateSelect2(a.sale)
      )
    }
  }, [currencyTo])

  return (
    <>
      <Header currency={currency} />
      <Input
        amount={fromAmount}
        currency={currencyFrom}
        setAmount={handleFromAmountChange}
        setCurrency={setCurrencyFrom} />
      <Input
        amount={toAmount}
        currency={currencyTo}
        setAmount={handleToAmountChange}
        setCurrency={setCurrencyTo} />
    </>
  )
}

export default App

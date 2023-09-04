import { useEffect, useState } from "react"
import Chart from "./Chart"
import { getCandles } from './services/getData'

function App() {
  const [data, setData] = useState([])
  const [symbol, setSymbol] = useState('ETHUSDT')
  const [interval, setInterval] = useState('1m')

  useEffect(() => {
    getCandles(symbol, interval)
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [symbol, interval])

  const onSymbolChange = (e: any) => {
    setSymbol(e.target.value)
  }
  const onIntervalChange = (e: any) => {
    setInterval(e.target.value)
  }
  return (
    <>
      <div>
        <select onChange={onSymbolChange}>
          <option value="ETHUSDT">ETHUSDT</option>
          <option value="BTCUSDT">BTCUSDT</option>
          <option value="BTCUSDT">ADAUSDT</option>
        </select>
        <select onChange={onIntervalChange}>
          <option value="1m">1m</option>
          <option value="1d">1d</option>
          <option value="1w">1w</option>
        </select>
        <Chart data={data} />
      </div>

    </>
  )
}

export default App

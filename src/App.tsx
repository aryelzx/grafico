import { useEffect, useState } from "react"
import useWebSocket from 'react-use-websocket'
import Candle from "../server/Candle"
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { lastJsonMessage }: any =
  useWebSocket(`wss://stream.binance.com:443/ws/${symbol.toLocaleLowerCase()}@kline_${interval}`,
  {
        onOpen: () => console.log('Coneção websocket estabelecida com sucesso!'),
        onError: (e) => console.log(e),
        shouldReconnect: () => true,
        reconnectAttempts: 3000,
        onMessage: () => {
          if (lastJsonMessage) {
            const newCandle = new Candle(lastJsonMessage.k.t, lastJsonMessage.k.o, lastJsonMessage.k.h, lastJsonMessage.k.l, lastJsonMessage.k.c);
            const newData: number[] = [...data]

            if(lastJsonMessage.k.x === false){
              newData[newData.length - 1] = newCandle;
            }
            else{
              newData.splice(0, 1);
              newData.push(newCandle)
            }
            setData(newData)
          }
        }
      }
    )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSymbolChange = (e: any) => {
    setSymbol(e.target.value)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onIntervalChange = (e: any) => {
    setInterval(e.target.value)
  }
  return (
    <>
      <div className="w-full bg-black">
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

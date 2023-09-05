import axios from 'axios';
import Candle from '../../server/Candle';

//fazendo requisicao com parametros mockados
export async function getCandles(symbol: string, interval: string) {
  const result = await axios.get(`http://localhost:3001/klines?symbol=${symbol.toUpperCase()}&interval=${interval}`)
  const candles = result.data.map((res: number[]) => {
    return new Candle(res[0], res[1], res[2], res[3], res[4])
  })
  return candles
}

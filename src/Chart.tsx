import ApexChart from 'react-apexcharts'
import { ChartProps } from 'react-apexcharts/lib/components/ApexCharts'
export default function Chart() {
    const options: ChartProps = {
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }
  return (
    <div>
        <ApexChart
        options={options}
        />
    </div>
  )
}

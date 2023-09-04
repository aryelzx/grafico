import { ApexOptions } from "apexcharts";
import ApexChart from 'react-apexcharts';
 
export default function Chart() {
    const options: ApexOptions = {
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

import { ApexOptions } from "apexcharts";
import ApexChart from 'react-apexcharts';

export default function Chart(props: any) {
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

    const series = [{
        data: props.data
    }]

    return (
        <div>
            <ApexChart
                options={options}
                series={series}
                type="candlestick"
                width={640}
                height={480}
            />
        </div>
    )
}

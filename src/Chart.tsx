import { ApexOptions } from "apexcharts";
import ApexChart from 'react-apexcharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <div className="w-full flex bg-black">
            <ApexChart
                className="w-full"
                options={options}
                series={series}
                type="candlestick"
                width={640}
                height={480}
            />
        </div>
    )
}

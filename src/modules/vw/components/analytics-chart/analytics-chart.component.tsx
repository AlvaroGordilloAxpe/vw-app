import styles from './analytics-chart.module.css'
import cn from 'classnames'
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    Title,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useGetMeasurementById } from '@/vw/services'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export function VWAnalyticsChartComponent({ id }: { id: number }) {
    const { data } = useGetMeasurementById(id)

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }

    const labelUnit = data ? data.unit : 'unknonw'

    const dataset =
        data && data?.quantityList && data?.quantityList.length > 0
            ? data.quantityList.map((item) => ({
                  x: item.dateTime.split('.')[0],
                  y: parseInt(item.value),
              }))
            : []

    const dataToChart = {
        datasets: [
            {
                label: labelUnit,
                data: dataset,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    return (
        <div
            data-testid="vw-analytics-chart-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <div className={styles.canvas_chart}>
                {data ? <Line options={options} data={dataToChart} /> : null}
            </div>
        </div>
    )
}

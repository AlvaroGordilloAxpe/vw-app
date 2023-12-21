import styles from './analytics-chart.module.css'
import cn from 'classnames'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useGetAnalyticById } from '@/vw/services'

ChartJS.register(ArcElement, Tooltip, Legend)

export function VWAnalyticsChartComponent({ id }: { id: string | string[] }) {
    const { data, isLoading } = useGetAnalyticById(id as string)

    //className="w-[50vw] h-[80vh] bg-neutral-50 shadow-xl shadow-slate-900/30"
    return (
        <div
            data-testid="vw-analytics-chart-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <div className={styles.canvas_chart}>
                {!isLoading && data && (
                    <Pie
                        data={{
                            labels: data.labels,
                            datasets: data.datasets,
                        }}
                    />
                )}
            </div>
        </div>
    )
}

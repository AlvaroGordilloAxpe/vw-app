import styles from './analytics-chart.module.css'
import cn from 'classnames'
import { useGetAnalyticById } from '@/vw/services'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import Link from 'next/link'
import * as Card from '@/common/components/ui/card'
import { Button } from '@/common/components/ui/button'

ChartJS.register(ArcElement, Tooltip, Legend)

const ANALYTICS_LIST_PATH = 'vw/analytics'

export function VWAnalyticsChartComponent({ id }: { id: string | string[] }) {
    const { data, isLoading } = useGetAnalyticById(id as string)

    return (
        <div
            data-testid="vw-analytics-chart-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-2/3 h-[85vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-row justify-between">
                    <div>
                        <Card.Title className="text-2xl">
                            Metric Chart
                        </Card.Title>
                        <Card.Description>
                            Chart of metric {id}
                        </Card.Description>
                    </div>
                    <div>
                        <Button size="sm">
                            <Link href={`/${ANALYTICS_LIST_PATH}`}>
                                Go Analytics List
                            </Link>
                        </Button>
                        <Button size="sm" className="ml-2">
                            Download CSV
                        </Button>
                    </div>
                </Card.Header>
                <Card.Content className={styles.canvas_chart}>
                    {!isLoading && data && (
                        <Pie
                            data={{
                                labels: data.labels,
                                datasets: data.datasets,
                            }}
                        />
                    )}
                </Card.Content>
            </Card.Root>
        </div>
    )
}

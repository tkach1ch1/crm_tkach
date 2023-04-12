import PageTitle from '../../components/PageTitle'
import { MdOutlineDashboard } from 'react-icons/md'
import ChartContainer from './components/ChartContainer'
import Chart from './components/Chart'
import Chart1 from './components/Charts/Chart1'
import Chart2 from './components/Charts/Chart2'
import Chart3 from './components/Charts/Chart3'
import Chart4 from './components/Charts/Chart4'
import Chart5 from './components/Charts/Chart5'
import Chart6 from './components/Charts/Chart6'

const DashboardPage = () => {
    return (
        <div>
            <PageTitle
                title='Dashboard'
                icon={<MdOutlineDashboard />}
            />
            <ChartContainer>
                <Chart>
                    <Chart1 />
                </Chart>
                <Chart>
                    <Chart2 />
                </Chart>
                <Chart>
                    <Chart3 />
                </Chart>
                <Chart>
                    <Chart4 />
                </Chart>
                <Chart>
                    <Chart5 />
                </Chart>
                <Chart>
                    <Chart6 />
                </Chart>
            </ChartContainer>
        </div>
    )
}

export default DashboardPage

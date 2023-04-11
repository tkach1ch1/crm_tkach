import PageTitle from '../components/PageTitle'
import { MdOutlineDashboard } from 'react-icons/md'

const DashboardPage = () => {
    return (
        <div>
            <PageTitle
                title='Dashboard'
                icon={<MdOutlineDashboard />}
            />
        </div>
    )
}

export default DashboardPage

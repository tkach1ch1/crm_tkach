import { FiUsers } from 'react-icons/fi'
import PageTitle from '../../components/PageTitle'
import AllUsersTable from './components/AllUsersTable'

const UsersPage = () => {
    return (
        <div>
            <PageTitle
                title='Users management'
                icon={<FiUsers />}
            />
            <AllUsersTable />
        </div>
    )
}

export default UsersPage

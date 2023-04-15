import ErrorAlert from '../../../components/ErrorAlert'
import LoadingAlert from '../../../components/LoadingAlert'
import useAllUsers from '../hooks/useAllUsers'
import TableRow from './TableRow'

import { nanoid } from 'nanoid'

const AllUsersTable = () => {
    const { allUsers, loading, error } = useAllUsers()

    return (
        <>
            <table
                className='table'
                style={{
                    minWidth: '1100px',
                }}
            >
                <thead>
                    <tr style={{ fontSize: '14px' }}>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email Address</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Birthday</th>
                        <th scope='col'>Labels</th>
                        <th scope='col'>Date Created</th>
                    </tr>
                </thead>
                {loading ? (
                    <tbody>
                        <tr>
                            <td>
                                <LoadingAlert />
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {allUsers?.map((data) => (
                            <TableRow
                                key={nanoid()}
                                uid={data.uid}
                                name={data.first_name + data.last_name}
                                email={data.email}
                                birthday={data.birthday}
                                created_data={data.created_data}
                                phone_number={data.phone_number}
                                role={data.role}
                            />
                        ))}
                    </tbody>
                )}
            </table>
            {error && (
                <ErrorAlert
                    errorMassage='Ups, something weng wrong, please try again!'
                    width='fit-content'
                />
            )}
        </>
    )
}

export default AllUsersTable

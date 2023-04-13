import { useEffect, useState } from 'react'
import TableRow from './TableRow'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'

interface UsersDataProps {
    first_name: string
    last_name: string
    email: string
    phone_number: string
    birthday: string
    created_data: string
}

const AllUsersTable = () => {
    const [allUsers, setAllUsers] = useState<UsersDataProps[]>()

    useEffect(() => {
        try {
            const getAllUsers = async () => {
                const allUsers = await getDocs(collection(db, 'users'))
                const allUsersData = allUsers.docs.map((doc) => doc.data())
                setAllUsers(allUsersData as UsersDataProps[])
            }
            getAllUsers()
        } catch (error) {
            console.log('All users data error' + { error })
        }
    }, [])

    return (
        <table
            className='table'
            style={{
                minWidth: '1000px',
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
            <tbody>
                {allUsers?.map((data) => (
                    <TableRow
                        name={data.first_name + data.last_name}
                        email={data.email}
                        birthday={data.birthday}
                        created_data={data.created_data}
                        phone_number={data.phone_number}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default AllUsersTable

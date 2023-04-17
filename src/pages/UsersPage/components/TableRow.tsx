import { ChangeEvent, memo } from 'react'
import TableData from './TableData'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'

export interface UsersDataProps {
    name: string
    email: string
    phone_number: string
    birthday: string
    created_data: string
    uid: string
    role: string
}

const TableRow = memo(
    ({ name, email, phone_number, birthday, created_data, uid, role }: UsersDataProps) => {
        //On role change update role field of user in users collection
        const onSelectChange = async (event: ChangeEvent<HTMLSelectElement>) => {
            await updateDoc(doc(db, 'users', uid), {
                role: event.target.value,
            })
        }

        return (
            <tr>
                <TableData className='font-weight-bolder'>{name}</TableData>
                <TableData className='text-main_gray'>{email}</TableData>
                <TableData className='text-main_gray'>{phone_number}</TableData>
                <TableData className='text-main_gray'>{birthday}</TableData>
                <td>
                    <select
                        className='custom-select border-0 '
                        onChange={onSelectChange}
                        style={{ width: '200px', marginLeft: '-12px' }}
                    >
                        <option value={''}>{role}</option>
                        <option value='Passenger'>Passenger</option>
                        <option value='Driver'>Driver</option>
                        <option value='Dispatcher'>Dispatcher</option>
                    </select>
                </td>
                <TableData className='text-main_gray'>{created_data}</TableData>
            </tr>
        )
    }
)

export default TableRow

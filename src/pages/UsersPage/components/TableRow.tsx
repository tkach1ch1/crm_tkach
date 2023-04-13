import { ChangeEvent, useState } from 'react'
import TableData from './TableData'

export interface UsersDataProps {
    name: string
    email: string
    phone_number: string
    birthday: string
    created_data: string
}

const TableRow = ({ name, email, phone_number, birthday, created_data }: UsersDataProps) => {
    const [selectValue, setSelectValue] = useState('passanger')

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value)
    }

    //Select option bg style
    const labelColor =
        selectValue === 'passanger'
            ? 'bg-success text-green'
            : selectValue === 'driver'
            ? 'bg-purple text-dark-purple'
            : selectValue === 'dispatcher'
            ? 'bg-warning text-yellow'
            : ''

    const selectClass = 'custom-select'.concat(' ' + labelColor)

    return (
        <tr>
            <TableData style={{ fontWeight: '500' }}>{name}</TableData>
            <TableData style={{ color: '#6f6f6f' }}>{email}</TableData>
            <TableData style={{ color: '#6f6f6f' }}>{phone_number}</TableData>
            <TableData style={{ color: '#6f6f6f' }}>{birthday}</TableData>
            <td>
                <select
                    className={selectClass}
                    onChange={onSelectChange}
                    style={{ border: 'none', width: '200px' }}
                >
                    <option
                        value='passanger'
                        selected
                    >
                        Passanger
                    </option>
                    <option value='driver'>Driver</option>
                    <option value='dispatcher'>Dispatcher</option>
                </select>
            </td>
            <TableData style={{ color: '#6f6f6f' }}>{created_data}</TableData>
        </tr>
    )
}

export default TableRow

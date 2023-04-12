import { ChangeEvent, useState } from 'react'
import TableData from './TableData'

const TableRow = () => {
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
            <TableData style={{ fontWeight: '500' }}>Bogdan Tkach</TableData>
            <TableData style={{ color: '#6f6f6f' }}>tkachbogdan0205@gmail.com</TableData>
            <TableData style={{ color: '#6f6f6f' }}>+38066377283</TableData>
            <TableData style={{ color: '#6f6f6f' }}>02.05.1999</TableData>
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
            <TableData style={{ color: '#6f6f6f' }}>13 Jun, 2023</TableData>
        </tr>
    )
}

export default TableRow

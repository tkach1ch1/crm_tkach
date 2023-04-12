import { nanoid } from 'nanoid'
import { useAppSelector } from '../../../hooks/useReduxHook'
import TripsTableRow from './TripsTableRow'

const AllTripsTable = () => {
    const allTripsArray = useAppSelector((state) => state.allTrips)
    return (
        <table
            className='table'
            style={{
                minWidth: '1000px',
            }}
        >
            <thead>
                <tr style={{ fontSize: '14px' }}>
                    <th scope='col'>Transport number</th>
                    <th scope='col'>Transport type</th>
                    <th scope='col'>From</th>
                    <th scope='col'>Where</th>
                    <th scope='col'>Available seats</th>
                    <th scope='col'>Date of departure</th>
                    <th scope='col'>Time of departure</th>
                </tr>
            </thead>
            <tbody>
                {allTripsArray.map((elem) => (
                    <TripsTableRow
                        key={nanoid()}
                        from={elem.from}
                        where={elem.where}
                        type={elem.type}
                        number={elem.number}
                        date={elem.date}
                        time={elem.time}
                        seats={elem.seats}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default AllTripsTable

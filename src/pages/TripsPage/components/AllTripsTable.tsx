import TripsTableRow from './TripsTableRow'
import useAllTrips from '../hooks/useAllTrips'
import ErrorAlert from '../../../components/ErrorAlert'
import LoadingAlert from '../../../components/LoadingAlert'

const AllTripsTable = () => {
    const { allTrips, loading, error } = useAllTrips()

    return (
        <>
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
                        <th scope='col'>Options</th>
                    </tr>
                </thead>
                {loading ? (
                    <tbody>
                        <tr>
                            <td className='w-100'>
                                <LoadingAlert />
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {allTrips &&
                            allTrips.map((elem) => (
                                <TripsTableRow
                                    key={elem.id}
                                    from={elem.from}
                                    where={elem.where}
                                    type={elem.type}
                                    number={elem.number}
                                    date={elem.date}
                                    time={elem.time}
                                    seats={elem.seats}
                                    id={elem.id}
                                />
                            ))}
                    </tbody>
                )}
            </table>
            {error && <ErrorAlert errorMassage='Ups, something weng wrong, please try again!' />}
        </>
    )
}

export default AllTripsTable

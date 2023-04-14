import TripsTableRow from './TripsTableRow'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebaseConfig'

interface TripsDataProps {
    from: string
    where: string
    type: string
    number: string
    date: string
    time: string
    seats: string
    id: string
}

const AllTripsTable = () => {
    //Get all trips
    const [allTrips, setAllTrips] = useState<TripsDataProps[]>()

    useEffect(() => {
        try {
            const getAllTrips = async () => {
                const allTrips = await getDocs(collection(db, 'trips'))
                const allTripsData = allTrips.docs.map((doc) => doc.data())
                setAllTrips(allTripsData as TripsDataProps[])
            }
            getAllTrips()
        } catch (error) {
            console.log('All trips data error' + { error })
        }
    }, [allTrips])

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
                    <th scope='col'>Options</th>
                </tr>
            </thead>
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
        </table>
    )
}

export default AllTripsTable

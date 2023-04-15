import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebaseConfig'
import { useEffectOnce } from 'usehooks-ts'
import { useAppSelector } from '../../../hooks/useReduxHook'

interface TripsDataProps {
    from: string
    where: string
    type: string
    number: string
    date: string
    time: string
    seats: string
    id: string
    created_trip_date: { seconds: number }
}

const useAllTrips = () => {
    //Get all trips
    const [allTrips, setAllTrips] = useState<TripsDataProps[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const createdTrip = useAppSelector((state) => state.actionTrip)

    const getAllTrips = async (loading: boolean) => {
        try {
            loading && setLoading(true)
            setError(false)
            const allTrips = await getDocs(collection(db, 'trips'))
            const allTripsData = allTrips.docs.map((doc) => doc.data())
            //Sorted trips array based on created trip data
            const sortedTripsArray = allTripsData?.sort(
                (a, b) => b.created_trip_date.seconds - a.created_trip_date.seconds
            )

            setAllTrips(sortedTripsArray as TripsDataProps[])
            setLoading(false)
        } catch (error) {
            setError(true)
            console.log('All trips data error' + { error })
        }
    }

    //UseEffect only on the first render with loading state to get all already created trips
    useEffectOnce(() => {
        getAllTrips(true)
    })

    //Recall useEffect to update all trips table if trip was created or deleted
    useEffect(() => {
        getAllTrips(false)
    }, [createdTrip])

    return { allTrips, loading, error }
}

export default useAllTrips

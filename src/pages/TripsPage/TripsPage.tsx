import PageTitle from '../../components/PageTitle'
import { BiTrip } from 'react-icons/bi'
import CreateTripButton from './components/CreateTripButton'
import AllTripsTable from './components/AllTripsTable'
import { useAppSelector } from '../../hooks/useReduxHook'
import CreatedTripPopup from './components/CreatedTripPopup'

const TripsPage = () => {
    const createdTrip = useAppSelector((state) => state.createdTrip.successfulTrip)

    return (
        <div className='position-relative'>
            <PageTitle
                title='Trips management'
                icon={<BiTrip />}
            />
            <CreateTripButton />
            <div style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px' }}>
                Created trips
            </div>
            <AllTripsTable />
            {createdTrip ? <CreatedTripPopup /> : null}
        </div>
    )
}

export default TripsPage

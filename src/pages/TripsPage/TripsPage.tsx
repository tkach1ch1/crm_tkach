import PageTitle from '../../components/PageTitle'
import { BiTrip } from 'react-icons/bi'
import CreateTripButton from './components/CreateTripButton'
import AllTripsTable from './components/AllTripsTable'
import { useAppSelector } from '../../hooks/useReduxHook'
import ActionTripPopup from './components/ActionTripPopup'

const TripsPage = () => {
    const tripAction = useAppSelector((state) => state.actionTrip)

    return (
        <div className='position-relative'>
            <PageTitle
                title='Trips management'
                icon={<BiTrip />}
            />
            <CreateTripButton />
            <div
                className='mb-4 font-weight-bolder'
                style={{ fontSize: '25px' }}
            >
                Created trips
            </div>
            <AllTripsTable />
            {tripAction.successfulTrip ? (
                <ActionTripPopup
                    text='The trip was successfully created'
                    alertColor='alert alert-success'
                />
            ) : tripAction.deletedTrip ? (
                <ActionTripPopup
                    text='The trip was deleted'
                    alertColor='alert alert-danger'
                />
            ) : null}
        </div>
    )
}

export default TripsPage

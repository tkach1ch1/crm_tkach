import React from 'react'
import PageTitle from '../../components/PageTitle'
import { BiTrip } from 'react-icons/bi'
import CreateTripButton from './components/CreateTripButton'
import AllTripsTable from './components/AllTripsTable'

const TripsPage = () => {
    return (
        <div>
            <PageTitle
                title='Trips management'
                icon={<BiTrip />}
            />
            <CreateTripButton />
            <div style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px' }}>
                Created trips
            </div>
            <AllTripsTable />
        </div>
    )
}

export default TripsPage

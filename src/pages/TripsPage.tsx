import React from 'react'
import PageTitle from '../components/PageTitle'
import { BiTrip } from 'react-icons/bi'

const TripsPage = () => {
    return (
        <div>
            <PageTitle
                title='Trips management'
                icon={<BiTrip />}
            />
        </div>
    )
}

export default TripsPage

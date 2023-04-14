import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useReduxHook'
import { addTrip } from '../../../redux/allTripsReducer'
import { successfullyCreatedTrip } from '../../../redux/tripActionReducer'
import TripFormInput from './TripFormInput'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'
import { nanoid } from 'nanoid'

interface ModalFormProps {
    handleClose: () => void
}

const ModalTripCreateForm = ({ handleClose }: ModalFormProps) => {
    const dispatch = useAppDispatch()

    //Trips input form validation
    const [formValues, setFormValues] = useState({
        from: '',
        where: '',
        type: '',
        number: '',
        date: '',
        time: '',
        seats: '',
    })

    const [loading, setLoading] = useState(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    //Trip create

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)

        dispatch(addTrip(formValues))

        //Get trip id
        const tripId = nanoid()

        await setDoc(doc(db, 'trips', tripId), {
            from: formValues.from,
            where: formValues.where,
            type: formValues.type,
            number: formValues.number,
            date: formValues.date,
            time: formValues.time,
            seats: formValues.seats,
            id: tripId,
        })
        handleClose()
        dispatch(successfullyCreatedTrip(true))
        setTimeout(() => {
            dispatch(successfullyCreatedTrip(false))
        }, 2000)
        setLoading(false)
    }

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete='off'
        >
            <div className='form-row'>
                <TripFormInput
                    htmlFor='inputFrom'
                    label='From'
                    type='text'
                    name='from'
                    value={formValues.from}
                    onChange={handleInputChange}
                    id='inputFrom'
                    placeholder='Kyiv'
                />

                <TripFormInput
                    htmlFor='inputWhere'
                    label='Where'
                    type='text'
                    name='where'
                    value={formValues.where}
                    onChange={handleInputChange}
                    id='inputWhere'
                    placeholder='Lviv'
                />
            </div>
            <div className='form-row'>
                <TripFormInput
                    htmlFor='inputTransportType'
                    label='Transport type'
                    type='text'
                    name='type'
                    value={formValues.type}
                    onChange={handleInputChange}
                    id='inputTransportType'
                    placeholder='Train/Bus/Auto'
                />

                <TripFormInput
                    htmlFor='inputTransportNumber'
                    label='Transport number'
                    type='text'
                    name='number'
                    value={formValues.number}
                    onChange={handleInputChange}
                    id='inputTransportNumber'
                />
            </div>
            <div className='form-row'>
                <TripFormInput
                    htmlFor='inputDepartureDate'
                    label='Deparute date'
                    type='date'
                    name='date'
                    value={formValues.date}
                    onChange={handleInputChange}
                    id='inputDepartureDate'
                />
                <TripFormInput
                    htmlFor='inputDepartureTime'
                    label='Departure time'
                    type='time'
                    name='time'
                    value={formValues.time}
                    onChange={handleInputChange}
                    id='inputDepartureTime'
                />
            </div>
            <div className='form-row'>
                <TripFormInput
                    htmlFor='inputSeatsAmount'
                    label='Amount of seats'
                    type='text'
                    name='seats'
                    value={formValues.seats}
                    onChange={handleInputChange}
                    id='inputSeatsAmount'
                />

                {!loading ? (
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <button
                            type='submit'
                            className='btn btn-primary'
                            style={{ marginTop: '15px', padding: '10px', width: '200px' }}
                        >
                            Create a trip
                        </button>
                    </div>
                ) : null}
            </div>
        </form>
    )
}

export default ModalTripCreateForm

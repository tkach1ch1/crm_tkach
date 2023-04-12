import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useReduxHook'
import { addTrip } from '../../../redux/allTripsReducer'
import { successfullyCreatedTrip } from '../../../redux/tripCreatedReducer'

interface ModalFormProps {
    handleClose: () => void
}
const ModalForm = ({ handleClose }: ModalFormProps) => {
    const [formValues, setFormValues] = useState({
        from: '',
        where: '',
        type: '',
        number: '',
        date: '',
        time: '',
        seats: '',
    })

    const dispatch = useAppDispatch()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        dispatch(addTrip(formValues))
        handleClose()
        dispatch(successfullyCreatedTrip(true))
        setTimeout(() => {
            dispatch(successfullyCreatedTrip(false))
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor='inputFrom'>From</label>
                    <input
                        type='text'
                        name='from'
                        value={formValues.from}
                        onChange={handleInputChange}
                        className='form-control'
                        id='inputFrom'
                        placeholder='Kyiv'
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor='inputWhere'>Where</label>
                    <input
                        type='text'
                        name='where'
                        value={formValues.where}
                        onChange={handleInputChange}
                        className='form-control'
                        id='inputWhere'
                        placeholder='Lviv'
                        required
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor='inputTransportType'>Transport type</label>
                    <input
                        type='text'
                        name='type'
                        value={formValues.type}
                        onChange={handleInputChange}
                        className='form-control'
                        id='inputTransportType'
                        placeholder='Train/Bus/Auto'
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor='inputTransportNumber'>Transport number</label>
                    <input
                        type='text'
                        name='number'
                        value={formValues.number}
                        onChange={handleInputChange}
                        className='form-control'
                        id='inputTransportNumber'
                        required
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor='inputDepartureDate'>Deparute date</label>
                    <input
                        type='date'
                        name='date'
                        value={formValues.date}
                        onChange={handleInputChange}
                        className='form-control'
                        id='inputDepartureDate'
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor='inputDepartureTime'>Departure time</label>
                    <input
                        type='time'
                        name='time'
                        value={formValues.time}
                        onChange={handleInputChange}
                        className='form-control'
                        id='inputDepartureTime'
                        required
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor='inputSeatsAmount'>Amount of seats</label>
                    <input
                        type='text'
                        name='seats'
                        value={formValues.seats}
                        onChange={handleInputChange}
                        className='form-control'
                        id='inputSeatsAmount'
                        required
                    />
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <button
                        type='submit'
                        className='btn btn-primary'
                        style={{ marginTop: '15px', padding: '10px', width: '200px' }}
                    >
                        Create a trip
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ModalForm

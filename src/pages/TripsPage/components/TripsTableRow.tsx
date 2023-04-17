import { deleteDoc, doc } from 'firebase/firestore'
import { AllTripsReducerElements } from '../../../redux/allTripsReducer'
import { db } from '../../../firebase/firebaseConfig'
import { AiFillDelete } from 'react-icons/ai'
import { useAppDispatch } from '../../../hooks/useReduxHook'
import { successfullyDeletedTrip } from '../../../redux/tripActionReducer'
import { memo, useState } from 'react'
import ModalWindow from '../../../components/ModalWindow'
import ModalTripDelete from './ModalTripDelete'

const TripsTableRow = memo(
    ({ from, where, type, number, date, time, seats, id }: AllTripsReducerElements) => {
        const dispatch = useAppDispatch()

        const [showModal, setShowModal] = useState(false)

        const handleModalTripDeleteClose = () => {
            setShowModal(false)
        }

        //Delete a trip
        const onClickTripDelete = async () => {
            await deleteDoc(doc(db, 'trips', id))
            setShowModal(false)
            dispatch(successfullyDeletedTrip(true))
            setTimeout(() => {
                dispatch(successfullyDeletedTrip(false))
            }, 2000)
        }

        return (
            <>
                <tr>
                    <td className='font-weight-bolder'>{number}</td>
                    <td className='text-main_gray'>{type}</td>
                    <td className='font-weight-bolder'>{from}</td>
                    <td className='font-weight-bolder'>{where}</td>
                    <td className='text-main_gray'>{seats}</td>
                    <td className='text-main_gray'>{date}</td>
                    <td className='text-main_gray'>{time}</td>
                    <td
                        className='pl-4'
                        style={{ cursor: 'pointer' }}
                    >
                        <button
                            type='button'
                            className='border-0 m-0 bg-white'
                            onClick={() => setShowModal(true)}
                        >
                            <AiFillDelete style={{ width: '20px', height: '20px' }} />
                        </button>
                    </td>
                </tr>
                {showModal && (
                    <ModalWindow
                        title='Delete a trip'
                        show={showModal}
                        handleClose={handleModalTripDeleteClose}
                    >
                        <ModalTripDelete
                            onCancelClick={() => setShowModal(false)}
                            onDeleteClick={onClickTripDelete}
                        />
                    </ModalWindow>
                )}
            </>
        )
    }
)

export default TripsTableRow

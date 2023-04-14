import { deleteDoc, doc } from 'firebase/firestore'
import { AllTripsReducerElements } from '../../../redux/allTripsReducer'
import { db } from '../../../firebase/firebaseConfig'
import { AiFillDelete } from 'react-icons/ai'
import { useAppDispatch } from '../../../hooks/useReduxHook'
import { successfullyDeletedTrip } from '../../../redux/tripActionReducer'
import { useState } from 'react'
import ModalWindow from '../../../components/ModalWindow'
import ModalTripDelete from './ModalTripDelete'

const TripsTableRow = ({
    from,
    where,
    type,
    number,
    date,
    time,
    seats,
    id,
}: AllTripsReducerElements) => {
    const dispatch = useAppDispatch()

    const [showModal, setShowModal] = useState(false)

    const handleModalTripDeleteClose = () => {
        setShowModal(false)
    }
    //Delete a trip
    const onClickTripDelete = () => {
        deleteDoc(doc(db, 'trips', id))
        setShowModal(false)
        dispatch(successfullyDeletedTrip(true))
        setTimeout(() => {
            dispatch(successfullyDeletedTrip(false))
        }, 2000)
    }

    return (
        <>
            <tr>
                <td style={{ fontWeight: 500 }}>{number}</td>
                <td className='text-main_gray'>{type}</td>
                <td style={{ fontWeight: 500 }}>{from}</td>
                <td style={{ fontWeight: 500 }}>{where}</td>
                <td className='text-main_gray'>{seats}</td>
                <td className='text-main_gray'>{date}</td>
                <td className='text-main_gray'>{time}</td>
                <td style={{ paddingLeft: '30px', cursor: 'pointer' }}>
                    <button
                        type='button'
                        style={{
                            border: 'none',
                            margin: '0',
                            background: 'transparent',
                        }}
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

export default TripsTableRow

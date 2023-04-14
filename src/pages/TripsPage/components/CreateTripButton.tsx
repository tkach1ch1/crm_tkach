import { FiPlus } from 'react-icons/fi'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import ModalWindow from '../../../components/ModalWindow'
import ModalTripCreateForm from './ModalTripCreateForm'

const CreateTripButton = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    return (
        <>
            <Button
                type='button'
                onClick={handleShow}
                className='p-2 bg-primary rounded '
                style={{ width: '200px', border: 'none', color: 'white', marginBottom: '30px' }}
            >
                <div
                    className='d-flex justify-content-center align-items-center'
                    style={{ gap: '5px' }}
                >
                    <FiPlus style={{ width: '20px', height: '20px' }} />
                    <span>Create new trip</span>
                </div>
            </Button>
            <ModalWindow
                show={showModal}
                handleClose={handleClose}
                title='Create a trip'
                size='lg'
            >
                <ModalTripCreateForm handleClose={handleClose} />
            </ModalWindow>
        </>
    )
}

export default CreateTripButton

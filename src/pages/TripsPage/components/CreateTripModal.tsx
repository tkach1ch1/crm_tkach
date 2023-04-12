import { Button, Modal } from 'react-bootstrap'
import { RxCross2 } from 'react-icons/rx'
import ModalForm from './ModalForm'

interface CreateTripModalProps {
    show: boolean
    handleClose: () => void
}

const CreateTripModal = ({ show, handleClose }: CreateTripModalProps) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            tabIndex='-1'
            size='lg'
            centered
        >
            <Modal.Header>
                <Modal.Title className='d-flex justify-content-between w-100'>
                    <div>Create a trip</div>
                    <Button
                        onClick={handleClose}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <RxCross2 style={{ width: '18px', height: '18px' }} />
                    </Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalForm handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    )
}

export default CreateTripModal

import { ReactNode } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { RxCross2 } from 'react-icons/rx'

interface ModalProps {
    show: boolean
    handleClose: () => void
    size?: 'sm' | 'lg' | 'xl' | undefined
    title: string
    children: ReactNode
}

const ModalWindow = ({ show, handleClose, size, title, children }: ModalProps) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            tabIndex='-1'
            centered
            size={size}
        >
            <Modal.Header>
                <Modal.Title className='d-flex justify-content-between w-100'>
                    <div>{title}</div>
                    <Button
                        onClick={handleClose}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <RxCross2 style={{ width: '18px', height: '18px' }} />
                    </Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    )
}

export default ModalWindow

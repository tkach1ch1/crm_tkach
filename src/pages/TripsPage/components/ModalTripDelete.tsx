interface ModalTripDeleteProps {
    onCancelClick: () => void
    onDeleteClick: () => void
}

const ModalTripDelete = ({ onCancelClick, onDeleteClick }: ModalTripDeleteProps) => {
    return (
        <div>
            <div
                className='mb-4 font-weight-bolder'
                style={{ fontSize: '20px' }}
            >
                Do you want to delete a trip?
            </div>
            <div className='d-flex justify-content-between'>
                <button
                    className='btn btn-light px-3'
                    style={{ fontSize: '20px' }}
                    onClick={onCancelClick}
                >
                    Cancel
                </button>
                <button
                    className='btn btn-danger px-3'
                    style={{ fontSize: '20px' }}
                    onClick={onDeleteClick}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ModalTripDelete

interface ModalTripDeleteProps {
    onCancelClick: () => void
    onDeleteClick: () => void
}

const ModalTripDelete = ({ onCancelClick, onDeleteClick }: ModalTripDeleteProps) => {
    return (
        <div>
            <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '25px' }}>
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

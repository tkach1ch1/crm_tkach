const CreatedTripPopup = () => {
    return (
        <div
            className='alert alert-success position-fixed'
            role='alert'
            style={{ width: 'fit-content', bottom: 0, right: '20px' }}
        >
            The trip was successfully created
        </div>
    )
}

export default CreatedTripPopup

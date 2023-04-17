const LoadingAlert = () => {
    return (
        <div
            className='alert alert-primary d-flex align-items-center'
            role='alert'
            style={{ gap: '15px' }}
        >
            <div
                className='spinner-border text-info'
                role='status'
            />

            <div
                className='font-weight-bolder'
                style={{ fontSize: '18px' }}
            >
                Loading...
            </div>
        </div>
    )
}

export default LoadingAlert

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

            <div style={{ fontSize: '18px', fontWeight: 500 }}>Loading...</div>
        </div>
    )
}

export default LoadingAlert

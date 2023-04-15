interface ErrorAlertProps {
    errorMassage: string
    width?: string
}

const ErrorAlert = ({ errorMassage, width }: ErrorAlertProps) => {
    return (
        <div
            className='alert alert-danger'
            role='alert'
            style={{ width: width }}
        >
            {errorMassage}
        </div>
    )
}

export default ErrorAlert

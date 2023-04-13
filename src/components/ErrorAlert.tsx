interface ErrorAlertProps {
    errorMassage: string
}

const ErrorAlert = ({ errorMassage }: ErrorAlertProps) => {
    return (
        <div
            className='alert alert-danger'
            role='alert'
        >
            {errorMassage}
        </div>
    )
}

export default ErrorAlert

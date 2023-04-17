interface AuthTitleProps {
    title: string
}

const AuthTitle = ({ title }: AuthTitleProps) => {
    return (
        <div
            className='w-100 text-center text-uppercase p-4 font-weight-bold mt-4'
            style={{
                fontSize: '25px',
            }}
        >
            {title}
        </div>
    )
}

export default AuthTitle

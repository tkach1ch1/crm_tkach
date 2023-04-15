interface AuthTitleProps {
    title: string
}

const AuthTitle = ({ title }: AuthTitleProps) => {
    return (
        <div
            style={{
                width: '100%',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: '700',
                fontSize: '25px',
                padding: '15px',
                marginTop: '30px',
            }}
        >
            {title}
        </div>
    )
}

export default AuthTitle

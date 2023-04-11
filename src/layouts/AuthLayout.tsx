import { Navigate, Outlet } from 'react-router'

const AuthLayout = () => {
    const user = true

    if (user) {
        return <Navigate to='/dashboard' />
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                background:
                    'linear-gradient(90deg, rgba(1,53,58,1) 0%, rgba(0,116,126,1) 42%, rgba(0,125,136,1) 48%, rgba(3,170,176,1) 87%, rgba(4,194,197,1) 100%)',
            }}
        >
            <Outlet />
        </div>
    )
}

export default AuthLayout

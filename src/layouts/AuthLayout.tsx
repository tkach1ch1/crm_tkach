import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { useAppSelector } from '../hooks/useReduxHook'

const AuthLayout = () => {
    const { currentUser } = useAuth()

    const isAllowedAuth = useAppSelector((state) => state.allowReducer.isAllowedAuth)

    //Redirects if user is signed in
    if (currentUser && currentUser.email === 'tkachbogdan0205@gmail.com' && isAllowedAuth) {
        return <Navigate to='/dashboard' />
    } else if (currentUser && currentUser.email !== 'tkachbogdan0205@gmail.com' && isAllowedAuth) {
        return <Navigate to='/' />
    }

    return (
        <div
            className='d-flex justify-content-center align-items-center'
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

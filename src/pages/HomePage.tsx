import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

const HomePage = () => {
    const { logout } = useAuth()

    const { currentUser } = useAuth()

    if (!currentUser) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <div>Home</div>
            <button
                type='button'
                onClick={() => logout()}
            >
                Logout
            </button>
        </div>
    )
}

export default HomePage

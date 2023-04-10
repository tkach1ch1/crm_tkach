import { Navigate, Outlet } from 'react-router'

const ProtectedLayout = () => {
    const user = false

    if (!user) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ProtectedLayout

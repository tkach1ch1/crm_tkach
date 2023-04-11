import { Navigate, Outlet } from 'react-router'
import TopBar from './TopBar/TopBar'
import AsideBar from './AsideBar/AsideBar'

const ProtectedLayout = () => {
    const user = true

    if (!user) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <TopBar />
            <AsideBar />
            <div style={{ marginTop: '80px' }}>
                <Outlet />
            </div>
        </>
    )
}

export default ProtectedLayout

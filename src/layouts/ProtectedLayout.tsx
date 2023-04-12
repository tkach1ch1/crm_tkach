import { Navigate, Outlet } from 'react-router'
import TopBar from './TopBar/TopBar'
import AsideBar from './AsideBar/AsideBar'
import { useAppSelector } from '../hooks/useReduxHook'

const ProtectedLayout = () => {
    const toggleBurger = useAppSelector((state) => state.toggleBurger.toggle)

    const user = false

    if (!user) {
        return <Navigate to='/login' />
    }

    const marginLeft = toggleBurger ? '215px' : '75px'

    return (
        <>
            <TopBar />
            <div className='d-flex position-relative'>
                <AsideBar />
                <main
                    style={{
                        marginTop: '65px',
                        padding: '15px 20px',
                        flex: 1,
                        width: '100%',
                        marginLeft: marginLeft,
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default ProtectedLayout

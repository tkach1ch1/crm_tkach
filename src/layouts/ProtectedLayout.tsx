import { Navigate, Outlet } from 'react-router'
import TopBar from './TopBar/TopBar'
import AsideBar from './AsideBar/AsideBar'
import { useAppSelector } from '../hooks/useReduxHook'
import { useAuth } from '../context/AuthContext'

const ProtectedLayout = () => {
    const toggleBurger = useAppSelector((state) => state.toggleBurger.toggle)
    const isAllowedAuth = useAppSelector((state) => state.allowReducer.isAllowedAuth)

    const { currentUser } = useAuth()

    if (!currentUser && isAllowedAuth === false) {
        return (
            <Navigate
                to='/login'
                replace
            />
        )
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

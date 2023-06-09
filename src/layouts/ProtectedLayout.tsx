import { Navigate, Outlet } from 'react-router'
import TopBar from './TopBar/TopBar'
import AsideBar from './AsideBar/AsideBar'
import { useAppSelector } from '../hooks/useReduxHook'
import { useAuth } from '../context/AuthContext'

const ProtectedLayout = () => {
    const toggleBurger = useAppSelector((state) => state.toggleBurger.toggle)
    const isAllowedAuth = useAppSelector((state) => state.allowReducer.isAllowedAuth)

    const { currentUser } = useAuth()

    //Redirect if user is loged out
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
                    className='w-100'
                    style={{
                        marginTop: '65px',
                        padding: '15px 20px',
                        flex: 1,
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

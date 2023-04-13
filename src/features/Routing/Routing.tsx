import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import SignInPage from '../../pages/SignInPage'
import SignUpPage from '../../pages/SignUpPage'
import AuthLayout from '../../layouts/AuthLayout'
import ProtectedLayout from '../../layouts/ProtectedLayout'
import DashboardPage from '../../pages/DashboardPage/DashboardPage'
import UsersPage from '../../pages/UsersPage/UsersPage'
import TripsPage from '../../pages/TripsPage/TripsPage'
import HomePage from '../../pages/HomePage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Protected / admin paths */}
            <Route element={<ProtectedLayout />}>
                <Route
                    path='/dashboard'
                    element={<DashboardPage />}
                />
                <Route
                    path='/users'
                    element={<UsersPage />}
                />
                <Route
                    path='/trips'
                    element={<TripsPage />}
                />

                <Route
                    path='*'
                    element={<Navigate to='/dashboard' />}
                />
            </Route>

            {/* Auth paths */}
            <Route element={<AuthLayout />}>
                <Route
                    path='/login'
                    element={<SignInPage />}
                />

                <Route
                    path='/signup'
                    element={<SignUpPage />}
                />
                <Route
                    path='*'
                    element={<Navigate to='/login' />}
                />
            </Route>

            {/* Regular user paths */}
            <Route
                path='/'
                element={<HomePage />}
            />
            <Route
                path='*'
                element={<Navigate to='/' />}
            />
        </>
    )
)

const Routing = () => {
    return <RouterProvider router={router} />
}

export default Routing

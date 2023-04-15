import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { useAppSelector } from '../hooks/useReduxHook'
import { useEffect } from 'react'
import useUserInfoUpdate from './UsersPage/hooks/useUserInfoUpdate'

const HomePage = () => {
    const { logout } = useAuth()

    const { currentUser } = useAuth()
    const { addUserInfo } = useUserInfoUpdate()

    const userInfo = useAppSelector((state) => state.userAdditionalInfo.userInfo)

    //Update user info on user sign up
    useEffect(() => {
        if (currentUser) {
            const updateUserInfo = {
                first_name: userInfo.first_name,
                last_name: userInfo.last_name,
                birthday: userInfo.birthday,
                phone_number: userInfo.phone_number || '-',
                email: userInfo.email,
                role: 'Passanger',
                created_data: new Date().toLocaleDateString(),
                uid: currentUser?.uid,
            }

            addUserInfo(currentUser, updateUserInfo)
        }
    }, [
        currentUser,
        addUserInfo,
        userInfo.first_name,
        userInfo.last_name,
        userInfo.birthday,
        userInfo.phone_number,
        userInfo.email,
    ])

    if (!currentUser) {
        return <Navigate to='/login' />
    }

    return (
        <div style={{ width: '100%', height: '100vh ', background: '#F4F5F5', padding: '40px' }}>
            <div
                className='container w-5 w-50 h-100 bg-white rounded '
                style={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            >
                <div
                    className='d-flex flex-column justify-content-center'
                    style={{ height: 'inherit' }}
                >
                    <div
                        className='text-center mb-4'
                        style={{ fontSize: '25px', fontWeight: '500' }}
                    >
                        You have successfully loged in as a regular user
                    </div>

                    <div style={{ fontSize: '22px', fontWeight: '500', marginBottom: '15px' }}>
                        To have access to CRM system you need to follow the following points:
                    </div>
                    <div
                        style={{
                            fontSize: '20px',
                            marginLeft: '20px',
                            lineHeight: 2,
                            marginBottom: '15px',
                        }}
                    >
                        1) Log out <br />
                        2) Use login and password below to log in as an admin: <br />
                    </div>
                    <div
                        style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            marginLeft: '20px',
                            lineHeight: 2,
                            marginBottom: '20px',
                        }}
                    >
                        Login: tkachbogdan0205@gmail.com <br />
                        Password: 123456789
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                        <button
                            type='button'
                            className='btn btn-primary w-25'
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

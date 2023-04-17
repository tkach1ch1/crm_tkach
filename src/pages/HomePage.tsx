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
                displayName: userInfo.displayName || '-',
                birthday: userInfo.birthday || '-',
                phone_number: userInfo.phone_number || '-',
                email: userInfo.email || '-',
                role: userInfo.role,
                created_data: userInfo.created_data,
                uid: currentUser?.uid,
            }

            addUserInfo(currentUser, updateUserInfo)
        }
    }, [
        currentUser,
        addUserInfo,
        userInfo.displayName,
        userInfo.birthday,
        userInfo.phone_number,
        userInfo.email,
        userInfo.created_data,
        userInfo.role,
    ])

    //Redirect on user's log out
    if (!currentUser) {
        return <Navigate to='/login' />
    }

    return (
        <div
            className='w-100 vh-100 bg-light'
            style={{ padding: '40px' }}
        >
            <div
                className='container w-5 w-50 h-100 bg-white rounded '
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            >
                <div
                    className='d-flex flex-column justify-content-center'
                    style={{ height: 'inherit' }}
                >
                    <div
                        className='text-center mb-4 font-weight-bolder'
                        style={{ fontSize: '25px' }}
                    >
                        You have successfully loged in as a regular user
                    </div>

                    <div
                        className='mb-4 font-weight-bolder'
                        style={{ fontSize: '22px' }}
                    >
                        To have access to CRM system you need to follow the following points:
                    </div>
                    <div
                        className='mb-3 ml-4'
                        style={{
                            fontSize: '20px',
                            lineHeight: 2,
                        }}
                    >
                        1) Log out <br />
                        2) Use login and password below to log in as an admin: <br />
                    </div>
                    <div
                        className='ml-4 mb-4 font-weight-bolder'
                        style={{
                            fontSize: '18px',
                            lineHeight: 2,
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

import { useAuth } from '../../../../context/AuthContext'
import { useAppDispatch } from '../../../../hooks/useReduxHook'
import { toggleIsSignInAllowed } from '../../../../redux/allowAuthReducer'
import ListItem from './ListItem'

const ProfileDropdown = () => {
    const { logout } = useAuth()
    const dispatch = useAppDispatch()

    const onLogoutClick = () => {
        logout()
        dispatch(toggleIsSignInAllowed(false))
    }
    return (
        <div
            className='position-absolute'
            style={{
                top: '103%',
                right: '15px',
                boxShadow: '0px 6px 16px rgba(47, 52, 58, 0.1)',
                background: 'white',
            }}
        >
            <ul style={{ listStyle: 'none', all: 'unset' }}>
                <ListItem>Profile</ListItem>
                <ListItem>Settings</ListItem>
                <ListItem
                    active={true}
                    onClick={onLogoutClick}
                >
                    Logout
                </ListItem>
            </ul>
        </div>
    )
}

export default ProfileDropdown

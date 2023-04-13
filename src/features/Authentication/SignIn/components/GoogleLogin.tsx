import useAuthMethods from '../../hooks/useAuthMethods'
import LoginMethodContainer from './LoginMethodContainer'
import { RiGoogleFill } from 'react-icons/ri'

const GoogleLogin = () => {
    const { loginWithGoogle } = useAuthMethods()
    return (
        <LoginMethodContainer
            background='#DB4437'
            onClick={loginWithGoogle}
        >
            <RiGoogleFill />
            <span>Login with Google</span>
        </LoginMethodContainer>
    )
}

export default GoogleLogin

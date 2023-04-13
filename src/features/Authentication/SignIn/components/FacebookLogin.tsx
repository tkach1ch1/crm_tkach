import useAuthMethods from '../../hooks/useAuthMethods'
import LoginMethodContainer from './LoginMethodContainer'
import { CgFacebook } from 'react-icons/cg'

const FacebookLogin = () => {
    const { loginWithFacebook } = useAuthMethods()

    return (
        <LoginMethodContainer
            background='#4267B2'
            onClick={loginWithFacebook}
        >
            <CgFacebook />
            <span>Login with Facebook</span>
        </LoginMethodContainer>
    )
}

export default FacebookLogin

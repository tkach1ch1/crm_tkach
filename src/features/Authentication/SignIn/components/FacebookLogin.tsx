import LoginMethodContainer from './LoginMethodContainer'
import { CgFacebook } from 'react-icons/cg'

const FacebookLogin = () => {
    return (
        <LoginMethodContainer background='#4267B2'>
            <CgFacebook />
            <span>Login with Facebook</span>
        </LoginMethodContainer>
    )
}

export default FacebookLogin

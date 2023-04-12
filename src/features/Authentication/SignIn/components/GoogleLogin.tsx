import LoginMethodContainer from './LoginMethodContainer'
import { RiGoogleFill } from 'react-icons/ri'

const GoogleLogin = () => {
    return (
        <LoginMethodContainer background='#DB4437'>
            <RiGoogleFill />
            <span>Login with Google</span>
        </LoginMethodContainer>
    )
}

export default GoogleLogin

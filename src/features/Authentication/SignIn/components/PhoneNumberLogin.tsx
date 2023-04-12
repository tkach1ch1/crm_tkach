import LoginMethodContainer from './LoginMethodContainer'
import { BsFillPhoneFill } from 'react-icons/bs'

const PhoneNumberLogin = () => {
    return (
        <LoginMethodContainer background='#F4B400'>
            <BsFillPhoneFill />
            <span>Login with phone number</span>
        </LoginMethodContainer>
    )
}

export default PhoneNumberLogin

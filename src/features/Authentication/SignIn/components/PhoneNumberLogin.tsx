import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import LoginMethodContainer from './LoginMethodContainer'
import { BsFillPhoneFill } from 'react-icons/bs'
import { auth } from '../../../../firebase/firebaseConfig'
import { useState } from 'react'

const PhoneNumberLogin = () => {
    const [number, setNumber] = useState('+380663622840')

    const loginWithPhoneNumber = async () => {
        let verify = new RecaptchaVerifier('recaptcha-container', {}, auth)
        await signInWithPhoneNumber(auth, number, verify)
        alert('code sent')
    }

    return (
        <LoginMethodContainer
            background='#F4B400'
            onClick={loginWithPhoneNumber}
        >
            <BsFillPhoneFill />
            <span>Login with phone number</span>
        </LoginMethodContainer>
    )
}

export default PhoneNumberLogin

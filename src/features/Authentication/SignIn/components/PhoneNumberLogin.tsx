import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import LoginMethodContainer from './LoginMethodContainer'
import { BsFillPhoneFill } from 'react-icons/bs'
import { auth } from '../../../../firebase/firebaseConfig'
import { ChangeEvent, FormEvent, useState } from 'react'
import ModalWindow from '../../../../components/ModalWindow'
import PhoneAuthForm from './PhoneAuthForm'
import useAuthMethods from '../../hooks/useAuthMethods'

const PhoneNumberLogin = () => {
    const [phoneAuthShow, setPhoneAuthShow] = useState(false)
    const [number, setNumber] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value)
    }

    const handleClose = () => {
        setPhoneAuthShow(false)
    }

    const { generateRecaptcha, loginWithPhoneNumber } = useAuthMethods()

    //Login with phone number func
    const getOtp = async (event: FormEvent) => {
        event.preventDefault()
        try {
            generateRecaptcha()
            const response = await loginWithPhoneNumber(number)
            console.log(response)
        } catch (error) {
            // dispatch(getErrorMassage('Something went wrong, try again'))
        }
    }

    return (
        <>
            <LoginMethodContainer
                background='#F4B400'
                onClick={() => setPhoneAuthShow(true)}
            >
                <BsFillPhoneFill />
                <span>Login with phone number</span>
            </LoginMethodContainer>
            {phoneAuthShow ? (
                <ModalWindow
                    show={phoneAuthShow}
                    handleClose={handleClose}
                    title='Phone number authentication'
                >
                    <PhoneAuthForm
                        number={number}
                        onChange={handleInputChange}
                        onSubmit={getOtp}
                    />
                </ModalWindow>
            ) : null}
        </>
    )
}

export default PhoneNumberLogin

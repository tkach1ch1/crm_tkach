import LoginMethodContainer from './LoginMethodContainer'
import { BsFillPhoneFill } from 'react-icons/bs'
import { ChangeEvent, FormEvent, useState } from 'react'
import ModalWindow from '../../../../components/ModalWindow'
import PhoneAuthForm from './PhoneAuthForm'
import useAuthMethods from '../../hooks/useAuthMethods'

const PhoneNumberLogin = () => {
    const [phoneAuthShow, setPhoneAuthShow] = useState(false)
    const [falseNumberError, setFalseNumberError] = useState(false)
    const [expandePhoneAuthForm, setExpandePhoneAuthForm] = useState(false)

    const { loginWithPhoneNumber, confirmationResult } = useAuthMethods()

    const [number, setNumber] = useState('+380')
    const handlePhoneNumberInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value)
    }

    //Otp code verification
    const [otpCode, setOtpCode] = useState('')

    const handleOtpCodeInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        let otp = event.target.value
        setOtpCode(event.target.value)
        try {
            if (otp.length === 6) {
                //Verify otp
                const result = await confirmationResult.confirm(otp)
                return result.user
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setPhoneAuthShow(false)
    }

    //Check number validation
    const isNumberNotValid = isNaN(+number.substring(1))

    //Login with phone number to get OTP (one time password)
    const getOtp = (event: FormEvent) => {
        event.preventDefault()
        setFalseNumberError(false)
        if (number.length === 13 && !isNumberNotValid) {
            loginWithPhoneNumber(number, () => setExpandePhoneAuthForm(true))
        } else {
            setFalseNumberError(true)
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
                        onPhoneNumberChange={handlePhoneNumberInputChange}
                        onSubmit={getOtp}
                        numberError={falseNumberError}
                        expandeForm={expandePhoneAuthForm}
                        otpCode={otpCode}
                        onOtpCodeChange={handleOtpCodeInputChange}
                    />
                </ModalWindow>
            ) : null}
        </>
    )
}

export default PhoneNumberLogin

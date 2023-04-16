import LoginMethodContainer from './LoginMethodContainer'
import { BsFillPhoneFill } from 'react-icons/bs'
import { useState } from 'react'
import ModalWindow from '../../../../components/ModalWindow'
import PhoneAuthForm from './PhoneAuthForm'

const PhoneNumberLogin = () => {
    const [phoneAuthShow, setPhoneAuthShow] = useState(false)

    const handleClose = () => {
        setPhoneAuthShow(false)
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
                    <PhoneAuthForm />
                </ModalWindow>
            ) : null}
        </>
    )
}

export default PhoneNumberLogin

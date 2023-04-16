import { ChangeEvent, FormEvent, useState } from 'react'
import ErrorAlert from '../../../../components/ErrorAlert'
import useAuthMethods from '../../hooks/useAuthMethods'
import { useAppDispatch } from '../../../../hooks/useReduxHook'
import { toggleIsSignInAllowed } from '../../../../redux/allowAuthReducer'

const PhoneAuthForm = () => {
    const dispatch = useAppDispatch()

    const [falseNumberError, setFalseNumberError] = useState(false)
    const [expandePhoneAuthForm, setExpandePhoneAuthForm] = useState(false)

    const [number, setNumber] = useState('+380')

    const handlePhoneNumberInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value)
    }

    const { loginWithPhoneNumber, confirmationResult } = useAuthMethods()

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

    //Otp code verification
    const [otpCode, setOtpCode] = useState('')

    const handleOtpCodeInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        let otp = event.target.value
        setOtpCode(event.target.value)
        try {
            if (otp.length === 6) {
                //Verify otp
                const result = await confirmationResult.confirm(otp)
                dispatch(toggleIsSignInAllowed(true))
                return result.user
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {falseNumberError && <ErrorAlert errorMassage='Please enter a valid phone number' />}
            <form onSubmit={getOtp}>
                <div className='form-group'>
                    <input
                        className='form-control w-75'
                        id='phoneNumberInput'
                        aria-describedby='phoneNumberHelp'
                        value={number}
                        onChange={handlePhoneNumberInputChange}
                        required
                    />
                    <small
                        id='phoneNumberHelp'
                        className='form-text text-muted'
                    >
                        Please enter your phone number
                    </small>
                </div>

                {/* Recaptcha */}
                {!expandePhoneAuthForm ? (
                    <div
                        id='recaptcha-container'
                        className='mb-3'
                    />
                ) : null}

                {/* Sended code input  */}
                {expandePhoneAuthForm ? (
                    <div className='form-group'>
                        <input
                            className='form-control w-75'
                            id='otpCodeInput'
                            value={otpCode}
                            onChange={handleOtpCodeInputChange}
                            aria-describedby='otpCodeHelp'
                            required
                        />
                        <small
                            id='otpCodeHelp'
                            className='form-text text-muted'
                        >
                            Please enter the code sent to your phone
                        </small>
                    </div>
                ) : (
                    <button
                        type='submit'
                        className='btn btn-primary'
                    >
                        Send code
                    </button>
                )}
            </form>
        </>
    )
}

export default PhoneAuthForm

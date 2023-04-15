import { ChangeEvent, FormEvent } from 'react'
import ErrorAlert from '../../../../components/ErrorAlert'

interface PhoneAuthFormProps {
    number: string
    onPhoneNumberChange: (event: ChangeEvent<HTMLInputElement>) => void
    otpCode: string
    onOtpCodeChange: (event: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event: FormEvent) => void
    numberError: boolean
    expandeForm: boolean
}

const PhoneAuthForm = ({
    number,
    onPhoneNumberChange,
    otpCode,
    onOtpCodeChange,
    onSubmit,
    numberError,
    expandeForm,
}: PhoneAuthFormProps) => {
    return (
        <>
            {numberError && <ErrorAlert errorMassage='Please enter a valid phone number' />}
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        className='form-control w-75'
                        id='phoneNumberInput'
                        aria-describedby='phoneNumberHelp'
                        value={number}
                        onChange={onPhoneNumberChange}
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
                {!expandeForm ? (
                    <div
                        id='recaptcha-container'
                        className='mb-3'
                    />
                ) : null}

                {/* Sended code input  */}
                {expandeForm ? (
                    <div className='form-group'>
                        <input
                            className='form-control w-75'
                            id='otpCodeInput'
                            value={otpCode}
                            onChange={onOtpCodeChange}
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

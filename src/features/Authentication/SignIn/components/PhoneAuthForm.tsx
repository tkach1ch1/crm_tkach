import { ChangeEvent, FormEvent } from 'react'

interface PhoneAuthFormProps {
    number: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event: FormEvent) => Promise<void>
}

const PhoneAuthForm = ({ number, onChange, onSubmit }: PhoneAuthFormProps) => {
    return (
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <input
                    type='tel'
                    pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
                    className='form-control w-75'
                    id='phoneNumberInput'
                    aria-describedby='phoneNumberHelp'
                    placeholder='Enter phone number (066-000-0000)'
                    value={number}
                    onChange={onChange}
                    required
                />
            </div>
            <div
                id='recaptcha-container'
                className='mb-2'
            />
            <button
                type='submit'
                className='btn btn-primary'
            >
                Send code
            </button>
        </form>
    )
}

export default PhoneAuthForm

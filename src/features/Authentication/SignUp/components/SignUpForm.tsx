import { ChangeEvent, FormEvent, useState } from 'react'
import SignUpInput from './SignUpInput'
import CallToAction from '../../components/CallToAction'
import { useAuth } from '../../../../context/AuthContext'
import ErrorAlert from '../../../../components/ErrorAlert'
import { useAppDispatch } from '../../../../hooks/useReduxHook'
import { addUserAdditionalInfo } from '../../../../redux/signUpUserAdditionalInfoReducer'
import { toggleIsSignInAllowed } from '../../../../redux/allowAuthReducer'

const SignUpForm = () => {
    const dispatch = useAppDispatch()

    const [signUpValues, setSignUpValues] = useState({
        first_name: '',
        last_name: '',
        birthday: '',
        phone_number: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { signup } = useAuth()

    //Sign up inputs change handle
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setSignUpValues({ ...signUpValues, [name]: value })
    }

    //Form submit
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setError('')
        setLoading(true)

        try {
            //Sign up user
            await signup(signUpValues.email, signUpValues.password)
            dispatch(toggleIsSignInAllowed(true))
            //Add aditional user info
            dispatch(
                addUserAdditionalInfo({
                    displayName: signUpValues.first_name + ' ' + signUpValues.last_name,
                    birthday: signUpValues.birthday,
                    phone_number: signUpValues.phone_number || '-',
                    email: signUpValues.email,
                    role: 'Passenger',
                    created_data: new Date().toLocaleDateString(),
                })
            )
        } catch (error) {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            {error && <ErrorAlert errorMassage={error} />}
            <form
                onSubmit={handleSubmit}
                autoComplete='off'
            >
                <div className='form-row'>
                    <SignUpInput
                        htmlFor='inputFirstName'
                        label='First name'
                        name='first_name'
                        value={signUpValues.first_name}
                        type='text'
                        id='inputFirstName'
                        onChange={handleInputChange}
                        required={true}
                    />
                    <SignUpInput
                        htmlFor='inputLastName'
                        label='Last name'
                        name='last_name'
                        value={signUpValues.last_name}
                        type='text'
                        id='inputLastName'
                        onChange={handleInputChange}
                        required={true}
                    />
                </div>
                <div className='form-row'>
                    <SignUpInput
                        htmlFor='inputEmail'
                        label='Email'
                        name='email'
                        value={signUpValues.email}
                        type='email'
                        id='inputEmail'
                        onChange={handleInputChange}
                        required={true}
                    />
                    <SignUpInput
                        htmlFor='inputPassword'
                        label='Password'
                        name='password'
                        value={signUpValues.password}
                        type='password'
                        id='inputPassword'
                        onChange={handleInputChange}
                        required={true}
                    />
                </div>
                <div className='form-row'>
                    <SignUpInput
                        htmlFor='inputBirthday'
                        label='Birthday'
                        name='birthday'
                        value={signUpValues.birthday}
                        type='date'
                        id='inputBirthday'
                        onChange={handleInputChange}
                        required={true}
                    />
                    <SignUpInput
                        htmlFor='inputPhoneNumber'
                        label='Phone number'
                        name='phone_number'
                        value={signUpValues.phone_number}
                        type='tel'
                        id='inputPhoneNumber'
                        onChange={handleInputChange}
                        required={false}
                        placeholder='+380990010101 (optional)'
                    />
                </div>
                <div
                    className='form-row d-flex align-items-center mt-3'
                    style={{ gap: '8px' }}
                >
                    {!loading ? (
                        <div className='col-md-6'>
                            <button
                                type='submit'
                                className='btn btn-primary w-100'
                            >
                                Sign up
                            </button>
                        </div>
                    ) : (
                        <div className='col-md-6 text-center'>
                            <div
                                className='spinner-border text-primary'
                                role='status'
                            ></div>
                        </div>
                    )}
                    <CallToAction
                        text='Already have an account?'
                        action='Sign In'
                        link='/login'
                    />
                </div>
            </form>
        </>
    )
}

export default SignUpForm

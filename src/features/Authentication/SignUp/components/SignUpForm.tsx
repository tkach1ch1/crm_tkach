import { ChangeEvent, FormEvent, useState } from 'react'
import SignUpInput from './SignUpInput'
import CallToAction from '../../components/CallToAction'
import { useAuth } from '../../../../context/AuthContext'
import { db } from '../../../../firebase/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { useAppDispatch } from '../../../../hooks/useReduxHook'
import { Navigate, useNavigate } from 'react-router'

const SignUpForm = () => {
    const [signUpValues, setSignUpValues] = useState({
        first_name: '',
        last_name: '',
        birthday: '',
        phone_number: '',
        email: '',
        password: '',
    })

    const { signup, currentUser } = useAuth()

    const navigate = useNavigate()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setSignUpValues({ ...signUpValues, [name]: value })
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        try {
            await signup(signUpValues.email, signUpValues.password)

            if (currentUser) {
                await setDoc(doc(db, 'users', currentUser.uid), {
                    first_name: signUpValues.first_name,
                    last_name: signUpValues.last_name,
                    birthday: signUpValues.birthday,
                    phone_number: signUpValues.phone_number,
                    email: signUpValues.email,
                    role: 'Passanger',
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <div className='col-md-6 '>
                    <button
                        type='submit'
                        className='btn btn-primary w-100'
                    >
                        Sign up
                    </button>
                </div>
                <CallToAction
                    text='Already have an account?'
                    action='Sign In'
                    link='/login'
                />
            </div>
        </form>
    )
}

export default SignUpForm

import { ChangeEvent, FormEvent, useState } from 'react'
import LoginInput from './LoginInput'
import '../../style.css'
import ShowPasswordBtn from '../../components/ShowPasswordBtn'
import { useAuth } from '../../../../context/AuthContext'
import { useAppDispatch } from '../../../../hooks/useReduxHook'
import { getErrorMassage } from '../../../../redux/errorHandleReducer'

const LoginForm = () => {
    const dispatch = useAppDispatch()

    const [loginValues, setLoginValues] = useState({
        email: '',
        password: '',
    })

    const { login } = useAuth()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLoginValues({ ...loginValues, [name]: value.trim() })
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        try {
            await login(loginValues.email, loginValues.password)
        } catch (error) {
            dispatch(getErrorMassage('Invalid data, please try again'))
        }
    }

    //Show password
    const [showPass, setShowPass] = useState(false)

    const showPassFunc = (value: boolean) => {
        setShowPass(value)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='mb-3'
        >
            <LoginInput
                type='email'
                name='email'
                id='inputEmail'
                placeholder='Email'
                value={loginValues.email}
                onChange={handleInputChange}
            />
            <div className='position-relative'>
                <LoginInput
                    type={showPass ? 'text' : 'password'}
                    name='password'
                    id='inputPassword'
                    placeholder='Password'
                    value={loginValues.password}
                    onChange={handleInputChange}
                />
                <ShowPasswordBtn showPassFunc={showPassFunc} />
            </div>

            <button
                type='submit'
                className='btn btn-primary w-100'
                style={{ fontSize: '18px' }}
            >
                Login
            </button>
        </form>
    )
}

export default LoginForm

import { ChangeEvent, FormEvent, useState } from 'react'
import LoginInput from './LoginInput'

import '../../style.css'
import ShowPasswordBtn from '../../components/ShowPasswordBtn'

const LoginForm = () => {
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLoginValues({ ...loginValues, [name]: value })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

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

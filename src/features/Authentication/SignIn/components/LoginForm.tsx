import { ChangeEvent, FormEvent, useState } from 'react'
import LoginInput from './LoginInput'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import '../../style.css'

const LoginForm = () => {
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLoginValues({ ...loginValues, [name]: value })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
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
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    id='inputPassword'
                    placeholder='Password'
                    value={loginValues.password}
                    onChange={handleInputChange}
                />
                <button
                    onClick={() => setShowPassword(!showPassword)}
                    type='button'
                    className='password-btn'
                >
                    {showPassword ? (
                        <AiFillEyeInvisible style={{ width: '20px', height: '20px' }} />
                    ) : (
                        <AiFillEye style={{ width: '20px', height: '20px' }} />
                    )}
                </button>
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

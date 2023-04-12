import { ChangeEvent } from 'react'

interface LoginInputProps {
    type: string
    id: string
    placeholder: string
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const LoginInput = ({ type, id, placeholder, name, value, onChange }: LoginInputProps) => {
    return (
        <div className='form-group'>
            <input
                type={type}
                className='form-control p-4'
                style={{ fontSize: '18px' }}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default LoginInput

import { ChangeEvent } from 'react'

interface SignUpInputProps {
    label?: string
    htmlFor: string
    type: string
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    id: string
    placeholder?: string
    required: boolean
}

const SignUpInput = ({
    label,
    htmlFor,
    type,
    name,
    value,
    onChange,
    id,
    placeholder,
    required,
}: SignUpInputProps) => {
    return (
        <div className='form-group col-md-6'>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='form-control'
                id={id}
                placeholder={placeholder}
                required={required ? true : false}
            />
        </div>
    )
}

export default SignUpInput

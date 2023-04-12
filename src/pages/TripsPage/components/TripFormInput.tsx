import { ChangeEvent } from 'react'

interface TripFromInputProps {
    label: string
    htmlFor: string
    type: string
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    id: string
    placeholder?: string
}

const TripFromInput = ({
    label,
    htmlFor,
    type,
    name,
    value,
    onChange,
    id,
    placeholder,
}: TripFromInputProps) => {
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
                required
            />
        </div>
    )
}

export default TripFromInput

import { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

interface ShowPasswordBtnProps {
    showPassFunc: (value: boolean) => void
}

const ShowPasswordBtn = ({ showPassFunc }: ShowPasswordBtnProps) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <button
            onClick={() => {
                setShowPassword(!showPassword)
                showPassFunc(!showPassword)
            }}
            type='button'
            className='password-btn'
        >
            {showPassword ? (
                <AiFillEyeInvisible style={{ width: '20px', height: '20px' }} />
            ) : (
                <AiFillEye style={{ width: '20px', height: '20px' }} />
            )}
        </button>
    )
}

export default ShowPasswordBtn

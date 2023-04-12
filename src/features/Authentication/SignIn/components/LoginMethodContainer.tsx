import { ReactNode } from 'react'
import '../../style.css'

interface LoginMethodContainerProps {
    children: ReactNode
    background: string
}

const LoginMethodContainer = ({ children, background }: LoginMethodContainerProps) => {
    return (
        <button
            type='button'
            className='rounded d-flex align-items-center justify-content-center method-hover'
            style={{
                background: background,
                width: '100%',
                padding: '10px',
                border: 'none',
                color: 'white',
                gap: '10px',
            }}
        >
            {children}
        </button>
    )
}

export default LoginMethodContainer

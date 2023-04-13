import { ReactNode } from 'react'
import '../../style.css'

interface LoginMethodContainerProps {
    children: ReactNode
    background: string
    onClick?: () => void
}

const LoginMethodContainer = ({ children, background, onClick }: LoginMethodContainerProps) => {
    return (
        <button
            type='button'
            onClick={onClick}
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

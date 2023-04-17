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
            className='rounded d-flex align-items-center justify-content-center method-hover w-100 p-2 border-0 text-white'
            style={{
                background: background,
                gap: '10px',
            }}
        >
            {children}
        </button>
    )
}

export default LoginMethodContainer

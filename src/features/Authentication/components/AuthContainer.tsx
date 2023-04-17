import { ReactNode } from 'react'

interface AuthContainerProps {
    children: ReactNode
    maxWidth: string
}

const AuthContainer = ({ children, maxWidth }: AuthContainerProps) => {
    return (
        <div
            className='rounded container bg-white'
            style={{
                boxShadow: '0px 6px 16px rgba(47, 52, 58, 0.1)',
                maxWidth: maxWidth,
                padding: '15px 40px',
            }}
        >
            {children}
        </div>
    )
}

export default AuthContainer

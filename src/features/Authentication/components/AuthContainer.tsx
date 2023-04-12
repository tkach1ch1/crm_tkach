import { ReactNode } from 'react'

interface AuthContainerProps {
    children: ReactNode
}

const AuthContainer = ({ children }: AuthContainerProps) => {
    return (
        <div
            className='rounded container'
            style={{
                background: 'white',
                boxShadow: '0px 6px 16px rgba(47, 52, 58, 0.1)',
                maxWidth: '400px',
                padding: '15px 40px',
            }}
        >
            {children}
        </div>
    )
}

export default AuthContainer

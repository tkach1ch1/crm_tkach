import { ReactNode } from 'react'

interface NavBarContainerProps {
    children: ReactNode
}

const NavBarContainer = ({ children }: NavBarContainerProps) => {
    return (
        <div
            className='fixed-top border-bottom bg-white'
            style={{ height: '65px', zIndex: 1000 }}
        >
            <div
                className='d-flex align-items-center justify-content-between w-100 px-3'
                style={{ height: 'inherit' }}
            >
                {children}
            </div>
        </div>
    )
}

export default NavBarContainer

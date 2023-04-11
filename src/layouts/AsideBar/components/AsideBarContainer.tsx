import React, { ReactNode } from 'react'
import { useAppSelector } from '../../../hooks/useReduxHook'

interface AsideBarContainerProps {
    children: ReactNode
}

const AsideBarContainer = ({ children }: AsideBarContainerProps) => {
    const toggleBurger = useAppSelector((state) => state.toggleBurger.toggle)

    const width = toggleBurger ? '215px' : '75px'
    return (
        <nav
            className='p-2 position-fixed border-right'
            style={{
                top: '65px',
                width: width,
                height: '100vh',
                zIndex: '1000',
                background: 'white',
            }}
        >
            {children}
        </nav>
    )
}

export default AsideBarContainer

import { ReactNode } from 'react'
import { useAppSelector } from '../../../hooks/useReduxHook'

interface AsideBarContainerProps {
    children: ReactNode
}

const AsideBarContainer = ({ children }: AsideBarContainerProps) => {
    const toggleBurger = useAppSelector((state) => state.toggleBurger.toggle)

    const width = toggleBurger ? '215px' : '75px'
    return (
        <nav
            className='p-2 pt-3 border-right bg-white position-fixed'
            style={{
                minWidth: width,
                minHeight: 'calc(100vh - 65px)',
                marginTop: '65px',
                zIndex: '1000',
            }}
        >
            {children}
        </nav>
    )
}

export default AsideBarContainer

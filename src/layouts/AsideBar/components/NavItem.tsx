import { ReactNode } from 'react'
import '../style.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook'
import { NavLink } from 'react-router-dom'
import { burgerToggelAction } from '../../../redux/burgerToggleReducer'

interface NavItemProps {
    children: ReactNode
    link: string
}

const NavItem = ({ children, link }: NavItemProps) => {
    const dispatch = useAppDispatch()

    const burgerToggle = useAppSelector((state) => state.toggleBurger.toggle)

    const itemsPosition = burgerToggle ? 'justify-content-start' : 'justify-content-center'
    const className =
        'rounded hover-li p-2 mb-2 d-flex justify-content-start align-items-center'.concat(
            ' ' + itemsPosition
        )

    return (
        <li>
            <NavLink
                onClick={() => dispatch(burgerToggelAction(false))}
                to={link}
                style={{
                    height: '40px',
                    width: '100%',
                    gap: '10px',
                    textDecoration: 'none',
                }}
                className={({ isActive }) => (isActive ? `active ${className}` : className)}
            >
                {children}
            </NavLink>
        </li>
    )
}

export default NavItem

import NavItem from './NavItem'
import { MdOutlineDashboard } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { BiTrip } from 'react-icons/bi'
import { useAppSelector } from '../../../hooks/useReduxHook'

const navItemsArray = [
    { id: 1, item: 'Dashboard', element: MdOutlineDashboard, path: '/dashboard' },
    { id: 2, item: 'User management', element: FiUsers, path: '/users' },
    { id: 3, item: 'Creating a trip', element: BiTrip, path: '/trips' },
]

const NavItemsList = () => {
    const burgerToggle = useAppSelector((state) => state.toggleBurger.toggle)

    return (
        <ul style={{ all: 'unset' }}>
            {navItemsArray.map((elem) => (
                <NavItem
                    link={elem.path}
                    key={elem.id}
                >
                    <elem.element style={{ width: '24px', height: '24px' }} />
                    {burgerToggle ? elem.item : null}
                </NavItem>
            ))}
        </ul>
    )
}

export default NavItemsList

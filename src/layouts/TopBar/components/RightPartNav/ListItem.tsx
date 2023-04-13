import { ReactNode } from 'react'

interface ListItemProps {
    children: ReactNode
    active?: boolean
    onClick?: () => void
}

const ListItem = ({ children, active, onClick }: ListItemProps) => {
    const style = active
        ? { cursor: 'pointer', padding: '8px 50px 8px 8px' }
        : { cursor: 'not-allowed', padding: '8px 50px 8px 8px' }
    return (
        <li
            className=' hover-li'
            style={style}
            onClick={onClick}
        >
            {children}
        </li>
    )
}

export default ListItem

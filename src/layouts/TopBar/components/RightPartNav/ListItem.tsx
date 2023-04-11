import { ReactNode } from 'react'

interface ListItemProps {
    children: ReactNode
    active?: boolean
}

const ListItem = ({ children, active }: ListItemProps) => {
    const style = active
        ? { cursor: 'pointer', padding: '8px 50px 8px 8px' }
        : { cursor: 'not-allowed', padding: '8px 50px 8px 8px' }
    return (
        <li
            className=' hover-li'
            style={style}
        >
            {children}
        </li>
    )
}

export default ListItem

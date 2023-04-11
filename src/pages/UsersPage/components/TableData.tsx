import { CSSProperties, ReactNode } from 'react'

interface TableDataProps {
    children: ReactNode
    style?: CSSProperties
}

const TableData = ({ children, style }: TableDataProps) => {
    return (
        <td
            className='pt-3'
            style={style}
        >
            {children}
        </td>
    )
}

export default TableData

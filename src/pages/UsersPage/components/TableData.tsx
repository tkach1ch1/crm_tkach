import { CSSProperties, ReactNode } from 'react'

interface TableDataProps {
    children: ReactNode
    style?: CSSProperties
    className?: string
}

const TableData = ({ children, style, className }: TableDataProps) => {
    return (
        <td
            style={style}
            className={className}
        >
            <div className='pt-2'>{children}</div>
        </td>
    )
}

export default TableData

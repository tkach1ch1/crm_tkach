import { CSSProperties, ReactNode } from 'react'

interface TableDataProps {
    children: ReactNode
    style?: CSSProperties
}

const TableData = ({ children, style }: TableDataProps) => {
    return (
        <td style={style}>
            <div style={{ paddingTop: '8px' }}>{children}</div>
        </td>
    )
}

export default TableData

import { ReactNode } from 'react'

interface ChartProps {
    children: ReactNode
}
const Chart = ({ children }: ChartProps) => {
    return (
        <div
            className='col col-12 col-lg-5'
            style={{
                boxShadow: '0px 6px 16px rgba(47, 52, 58, 0.1)',
                minWidth: '500px',
                height: 'auto',
            }}
        >
            {children}
        </div>
    )
}

export default Chart

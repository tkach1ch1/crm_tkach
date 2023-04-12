import { ReactNode } from 'react'

interface ChartContainerProps {
    children: ReactNode
}

const ChartContainer = ({ children }: ChartContainerProps) => {
    return (
        <div className='container-xl'>
            <div
                className='row justify-content-center'
                style={{ gap: '40px 80px' }}
            >
                {children}
            </div>
        </div>
    )
}

export default ChartContainer

import { ReactNode } from 'react'
import '../../style.css'

interface ItemContainerProps {
    children: ReactNode
    active?: boolean
}

const ItemContainer = ({ children, active }: ItemContainerProps) => {
    //Till some functionality of item won't be implemented, inactive items will have cursor not-allowed
    const btnStyle = { width: '38px', height: '38px', border: 'none' }

    const style = active ? btnStyle : { ...btnStyle, cursor: 'not-allowed' }

    return (
        <button
            type='button'
            className='d-flex position-relative justify-content-center align-items-center rounded-circle hover-btn'
            style={style}
        >
            {children}
        </button>
    )
}

export default ItemContainer

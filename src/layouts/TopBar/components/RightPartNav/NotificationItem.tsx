import ItemContainer from './ItemContainer'
import { BsBell } from 'react-icons/bs'

const NotificationItem = () => {
    return (
        <ItemContainer>
            <BsBell style={{ width: '18px', height: '18px' }} />
            <div
                className='position-absolute bg-success rounded-circle'
                style={{ top: '5px', right: '10px', width: '6px', height: '6px' }}
            ></div>
        </ItemContainer>
    )
}

export default NotificationItem

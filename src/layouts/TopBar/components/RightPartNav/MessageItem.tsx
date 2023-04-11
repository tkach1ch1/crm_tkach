import { HiOutlineInbox } from 'react-icons/hi'
import ItemContainer from './ItemContainer'

const MessageItem = () => {
    return (
        <ItemContainer>
            <HiOutlineInbox style={{ width: '20px', height: '20px' }} />
            <div
                className='position-absolute  text-primary rounded'
                style={{
                    top: 0,
                    right: 0,
                    fontSize: '12px',
                    padding: '0 8px',
                    background: '#ebf5f5',
                }}
            >
                1
            </div>
        </ItemContainer>
    )
}

export default MessageItem

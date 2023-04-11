import ProfileIcon from './ProfileIcon'
import MessageItem from './MessageItem'
import NotificationItem from './NotificationItem'

const RightPartNav = () => {
    return (
        <div
            className='d-inline-flex justify-content-between align-items-center'
            style={{ listStyle: 'none', marginBottom: '0', gap: '10px' }}
        >
            <MessageItem />
            <NotificationItem />
            <ProfileIcon />
        </div>
    )
}

export default RightPartNav

import ProfileIcon from './ProfileIcon'
import MessageItem from './MessageItem'
import NotificationItem from './NotificationItem'

const RightPartNav = () => {
    return (
        <div
            className='d-inline-flex justify-content-between align-items-center list-unstyled mb-0'
            style={{ gap: '10px' }}
        >
            <MessageItem />
            <NotificationItem />
            <ProfileIcon />
        </div>
    )
}

export default RightPartNav

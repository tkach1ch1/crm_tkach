interface CallToActionProps {
    action: string
    link: string
    text: string
}

const CallToAction = ({ action, text, link }: CallToActionProps) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <span className='pr-1 text-main_gray'>{text}</span>
            <a href={link}>{action}</a>
        </div>
    )
}

export default CallToAction

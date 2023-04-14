interface CallToActionProps {
    action: string
    link: string
    text: string
}

const CallToAction = ({ action, text, link }: CallToActionProps) => {
    return (
        <div className='col-md-12 mt-3 w-100'>
            <span className='pr-1 text-main_gray'>{text}</span>
            <a href={link}>{action}</a>
        </div>
    )
}

export default CallToAction

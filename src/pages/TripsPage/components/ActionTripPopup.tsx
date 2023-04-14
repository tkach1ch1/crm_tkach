interface ActionTripPopupProps {
    text: string
    alertColor: string
}

const ActionTripPopup = ({ text, alertColor }: ActionTripPopupProps) => {
    return (
        <div
            className={alertColor}
            role='alert'
            style={{ position: 'fixed', width: 'fit-content', bottom: 0, right: '20px' }}
        >
            {text}
        </div>
    )
}

export default ActionTripPopup

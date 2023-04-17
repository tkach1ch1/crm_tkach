interface ActionTripPopupProps {
    text: string
    alertColor: string
}

const ActionTripPopup = ({ text, alertColor }: ActionTripPopupProps) => {
    return (
        <div
            className={alertColor}
            role='alert'
            style={{ position: 'fixed', width: 'fit-content', right: '20px', bottom: 0 }}
        >
            {text}
        </div>
    )
}

export default ActionTripPopup

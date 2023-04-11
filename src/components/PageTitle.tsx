interface PageTitleProps {
    title: string
    icon: JSX.Element
}

const PageTitle = ({ title, icon }: PageTitleProps) => {
    return (
        <div
            className='rounded d-flex align-items-center'
            style={{
                width: '100%',
                padding: '10px',
                fontSize: '18px',
                fontWeight: '500',
                boxShadow: '0px 6px 16px rgba(47, 52, 58, 0.1)',
                gap: '15px',
                marginBottom: '30px',
            }}
        >
            <div
                className=' text-secondary rounded d-flex justify-content-center align-items-center'
                style={{
                    width: '36px',
                    height: '36px',
                    boxShadow: '12px 8px 33px -12px rgba(0,0,0,0.75)',
                    background:
                        'linear-gradient(90deg, rgba(0,125,136,1) 14%, rgba(3,170,176,1) 87%, rgba(4,194,197,1) 100%)',
                }}
            >
                {icon}
            </div>
            <div>{title}</div>
        </div>
    )
}

export default PageTitle

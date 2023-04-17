import logo from '../../../../assets/svg/logo.svg'
import { useAppSelector } from '../../../../hooks/useReduxHook'

const Logo = () => {
    const burgerToggle = useAppSelector((state) => state.toggleBurger.toggle)

    return (
        <div
            style={burgerToggle ? { width: '200px' } : { width: 'inherit' }}
            className='d-flex justify-content-center align-items-center'
        >
            <a
                href='/dashboard'
                style={{ width: '40px', height: '40px' }}
                className='d-flex justify-content-center align-items-center mr-3'
            >
                <img
                    src={logo}
                    alt='logo'
                    className='w-100'
                />
            </a>

            {burgerToggle ? (
                <div
                    className='mr-3 font-weight-bold'
                    style={{ fontSize: '25px', fontStyle: 'italic' }}
                >
                    CRM
                </div>
            ) : null}
        </div>
    )
}

export default Logo

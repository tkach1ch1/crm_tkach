import PhoneNumberLogin from './PhoneNumberLogin'
import GoogleLogin from './GoogleLogin'
import FacebookLogin from './FacebookLogin'

const LoginMethods = () => {
    return (
        <div
            className='d-flex mb-5 flex-column justify-content-center align-items-center'
            style={{ gap: '10px' }}
        >
            <PhoneNumberLogin />
            <GoogleLogin />
            <FacebookLogin />
        </div>
    )
}

export default LoginMethods

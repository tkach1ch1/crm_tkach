import AuthContainer from '../components/AuthContainer'
import AuthTitle from '../components/AuthTitle'
import LoginForm from './components/LoginForm'
import LoginMethods from './components/LoginMethods'
import SendintToSignUp from './components/SendintToSignUp'

const SignIn = () => {
    return (
        <AuthContainer>
            <AuthTitle title='Login' />
            <LoginForm />
            <div
                className='mb-3'
                style={{ fontSize: '18px', textAlign: 'center' }}
            >
                &mdash; or &mdash;
            </div>
            <LoginMethods />
            <SendintToSignUp />
        </AuthContainer>
    )
}

export default SignIn

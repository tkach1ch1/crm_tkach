import AuthContainer from '../components/AuthContainer'
import AuthTitle from '../components/AuthTitle'
import SignUpForm from './components/SignUpForm'

const SignUp = () => {
    return (
        <AuthContainer maxWidth='600px'>
            <AuthTitle title='Sign Up' />
            <SignUpForm />
        </AuthContainer>
    )
}

export default SignUp

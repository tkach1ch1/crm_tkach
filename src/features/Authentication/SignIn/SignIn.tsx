import AuthContainer from '../components/AuthContainer'
import AuthTitle from '../components/AuthTitle'
import LoginForm from './components/LoginForm'
import LoginMethods from './components/LoginMethods'
import CallToAction from '../components/CallToAction'
import ErrorAlert from '../../../components/ErrorAlert'
import { useAppSelector } from '../../../hooks/useReduxHook'

const SignIn = () => {
    const error = useAppSelector((state) => state.errorHandle.error)
    return (
        <AuthContainer maxWidth='400px'>
            <AuthTitle title='Login' />
            {error && <ErrorAlert errorMassage={error} />}
            <LoginForm />
            <div
                className='mb-3'
                style={{ fontSize: '18px', textAlign: 'center' }}
            >
                &mdash; or &mdash;
            </div>
            <LoginMethods />
            <CallToAction
                text="Don't have an account yet?"
                action='Sign Up'
                link='/signup'
            />
        </AuthContainer>
    )
}

export default SignIn

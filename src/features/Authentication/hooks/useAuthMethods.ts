import {
    ConfirmationResult,
    FacebookAuthProvider,
    GoogleAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    signInWithPopup,
} from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook'
import { getErrorMassage } from '../../../redux/errorHandleReducer'
import { toggleIsSignInAllowed } from '../../../redux/allowAuthReducer'
import { addUserAdditionalInfo } from '../../../redux/signUpUserAdditionalInfoReducer'

const useAuthMethods = () => {
    const dispatch = useAppDispatch()

    //Error that show on wrong logins
    const error = useAppSelector((state) => state.errorHandle.error)

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(getErrorMassage(''))
            }, 5000)
        }
    }, [error, dispatch])

    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()

    //Facebook login
    const loginWithFacebook = async () => {
        try {
            dispatch(getErrorMassage(''))
            const result = await signInWithPopup(auth, facebookProvider)
            if (result.user) {
                dispatch(
                    addUserAdditionalInfo({
                        displayName: result.user.displayName,
                        phone_number: result.user.phoneNumber,
                        email: result.user.email,
                        role: 'Passenger',
                        created_data: new Date().toLocaleDateString(),
                    })
                )
            }

            dispatch(toggleIsSignInAllowed(true))
            console.log('You have loged in with Facebook', result.user)
            return result.user
        } catch (e) {
            if ((e as Error).message.includes('account-exists-with-different-credential')) {
                dispatch(getErrorMassage('You already have an account, try another login method'))
            } else {
                dispatch(getErrorMassage('Something went wrong, try again'))
            }
        }
    }

    //Google login
    const loginWithGoogle = async () => {
        try {
            dispatch(getErrorMassage(''))
            const result = await signInWithPopup(auth, googleProvider)
            if (result.user) {
                dispatch(
                    addUserAdditionalInfo({
                        displayName: result.user.displayName,
                        phone_number: result.user.phoneNumber,
                        email: result.user.email,
                        role: 'Passenger',
                        created_data: new Date().toLocaleDateString(),
                    })
                )
            }

            dispatch(toggleIsSignInAllowed(true))
            console.log('You have loged in with Google')
            return result.user
        } catch (e) {
            if ((e as Error).message.includes('account-exists-with-different-credential')) {
                dispatch(getErrorMassage('You already have an account, try another login method'))
            } else {
                dispatch(getErrorMassage('Something went wrong, try again'))
            }
        }
    }

    //Phone number login
    //If recaptcha was completed, get object with confirmation
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult>(
        {} as ConfirmationResult
    )

    const loginWithPhoneNumber = async (number: string, callbackAfterRecaptcha: () => void) => {
        try {
            // Create recaptcha
            const recaptchaVerifier = new RecaptchaVerifier(
                'recaptcha-container',
                {
                    callback: callbackAfterRecaptcha,
                },
                auth
            )
            //Phone number auth using recaptcha
            const result = await signInWithPhoneNumber(auth, number, recaptchaVerifier)
            setConfirmationResult(result)
        } catch (error) {
            console.log(error)
        }
    }

    return { loginWithFacebook, loginWithGoogle, loginWithPhoneNumber, confirmationResult }
}

export default useAuthMethods

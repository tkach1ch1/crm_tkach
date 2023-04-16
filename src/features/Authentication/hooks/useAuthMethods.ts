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
            await signInWithPopup(auth, facebookProvider)
            dispatch(toggleIsSignInAllowed(true))
            console.log('You have loged in with Facebook')
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
            await signInWithPopup(auth, googleProvider)
            dispatch(toggleIsSignInAllowed(true))
            console.log('You have loged in with Google')
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

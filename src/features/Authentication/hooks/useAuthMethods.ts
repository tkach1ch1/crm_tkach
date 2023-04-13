import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook'
import { getErrorMassage } from '../../../redux/errorHandleReducer'

const useAuthMethods = () => {
    const dispatch = useAppDispatch()

    const error = useAppSelector((state) => state.errorHandle.error)

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(getErrorMassage(''))
            }, 3000)
        }
    }, [error, dispatch])

    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()

    //Facebook login
    const loginWithFacebook = async () => {
        try {
            dispatch(getErrorMassage(''))
            await signInWithPopup(auth, facebookProvider)
            console.log('You have loged in with Facebook')
        } catch (e) {
            if ((e as Error).message.includes('account-exists-with-different-credential')) {
                dispatch(getErrorMassage('You already have an account'))
            } else {
                dispatch(getErrorMassage('Something went wrong, try again'))
            }
        }
    }

    //Google login
    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            console.log('You have loged in with Google')
        } catch (e) {
            if ((e as Error).message.includes('account-exists-with-different-credential')) {
                dispatch(getErrorMassage('You already have an account'))
            } else {
                dispatch(getErrorMassage('Something went wrong, try again'))
            }
        }
    }

    //Phone number login

    return { loginWithFacebook, loginWithGoogle }
}

export default useAuthMethods

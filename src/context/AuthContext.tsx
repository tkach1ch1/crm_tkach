import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import {
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

interface AuthProviderProps {
    children: ReactNode
}

interface ContextTypes {
    currentUser: User | null | undefined
    signup: (email: string, password: string) => Promise<UserCredential>
    login: (email: string, password: string) => Promise<UserCredential>
    logout: () => Promise<void>
}

export const AuthContext = createContext<ContextTypes>({} as ContextTypes)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>()

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscrube = auth.onAuthStateChanged((user) => setCurrentUser(user))

        return unsubscrube
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

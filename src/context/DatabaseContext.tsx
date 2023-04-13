import { DocumentData, DocumentReference, addDoc, collection, getDoc } from 'firebase/firestore'
import { ReactNode, createContext, useContext } from 'react'
import { db } from '../firebase/firebaseConfig'

interface DBProviderProps {
    children: ReactNode
}

interface DatabaseContextType {
    writeUserData: (
        firstName: string,
        lastName: string,
        id: string
    ) => Promise<DocumentReference<DocumentData>>
}

const DatabaseContext = createContext<DatabaseContextType>({} as DatabaseContextType)

export const useDatabase = () => {
    return useContext(DatabaseContext)
}

export const DBProvider = ({ children }: DBProviderProps) => {
    const usersCollectionRef = collection(db, 'users')

    const writeUserData = (firstName: string, lastName: string, id: string) => {
        return addDoc(collection(db, 'users', id), { firstName, lastName })
    }

    const value = {
        writeUserData,
    }

    return <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>
}

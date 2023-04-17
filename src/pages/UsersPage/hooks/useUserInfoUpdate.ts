import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'
import { User } from 'firebase/auth'

interface UpdateUserInfoElems {
    displayName: string
    birthday: string
    phone_number: string
    email: string
    role: string
    created_data: string
    uid: string | undefined
}

const useUserInfoUpdate = () => {
    const addUserInfo = async (currentUser: User, updateUserInfo: UpdateUserInfoElems) => {
        if (currentUser) {
            await setDoc(doc(db, 'users', currentUser.uid), updateUserInfo)
        }
    }

    return { addUserInfo }
}

export default useUserInfoUpdate

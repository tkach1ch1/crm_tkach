import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'

interface UsersDataProps {
    displayName: string
    email: string
    phone_number: string
    birthday: string
    created_data: string
    uid: string
    role: string
}

const useAllUsers = () => {
    const [allUsers, setAllUsers] = useState<UsersDataProps[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            setError(false)
            const getAllUsers = async () => {
                const allUsers = await getDocs(collection(db, 'users'))
                const allUsersData = allUsers.docs.map((doc) => doc.data())
                setAllUsers(allUsersData as UsersDataProps[])
                setLoading(false)
            }
            getAllUsers()
        } catch (error) {
            setError(true)
            console.log('All users data error' + { error })
        }
    }, [])
    return { allUsers, loading, error }
}

export default useAllUsers

import { CgMenuLeftAlt } from 'react-icons/cg'
import '../../style.css'
import { useState } from 'react'
import { useAppDispatch } from '../../../../hooks/useReduxHook'
import { burgerToggelAction } from '../../../../redux/burgerToggleReducer'

const BurgerMenu = () => {
    const [toggleBurger, setToggleBurger] = useState(false)

    const dispatch = useAppDispatch()

    return (
        <div
            style={{ width: '27px', height: '27px' }}
            onClick={() => {
                setToggleBurger(!toggleBurger)
                dispatch(burgerToggelAction(!toggleBurger))
            }}
        >
            <CgMenuLeftAlt
                className='burger-hover'
                style={{ width: '100%', height: 'inherit' }}
            />
        </div>
    )
}

export default BurgerMenu

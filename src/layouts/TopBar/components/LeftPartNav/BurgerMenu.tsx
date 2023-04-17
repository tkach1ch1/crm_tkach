import { CgMenuLeftAlt } from 'react-icons/cg'
import '../../style.css'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReduxHook'
import { burgerToggelAction } from '../../../../redux/burgerToggleReducer'

const BurgerMenu = () => {
    const toggleBurger = useAppSelector((state) => state.toggleBurger.toggle)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div
                style={{ width: '27px', height: '27px' }}
                onClick={() => {
                    dispatch(burgerToggelAction(!toggleBurger))
                }}
            >
                <CgMenuLeftAlt
                    className='burger-hover w-100'
                    style={{ height: 'inherit' }}
                />
            </div>
        </div>
    )
}

export default BurgerMenu

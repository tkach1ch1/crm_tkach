import BurgerMenu from './BurgerMenu'
import Logo from './Logo'

const LeftPartNav = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Logo />
            <BurgerMenu />
        </div>
    )
}

export default LeftPartNav

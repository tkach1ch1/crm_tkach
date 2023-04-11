import { memo } from 'react'
import LeftPartNav from './components/LeftPartNav/LeftPartNav'
import NavBarContainer from './components/TopBarContainer'
import RightPartNav from './components/RightPartNav/RightPartNav'

const TopBar = memo(() => {
    return (
        <NavBarContainer>
            <LeftPartNav />
            <RightPartNav />
        </NavBarContainer>
    )
})

export default TopBar

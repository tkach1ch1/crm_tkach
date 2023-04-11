import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import ProfileDropdown from './ProfileDropdown'
import developer from '../../../../assets/images/developer.jpg'

const ProfileIcon = () => {
    const [btnToggle, setBtnToggle] = useState(false)

    const ref = useRef(null)

    const onHandleClickOutside = () => {
        btnToggle && setBtnToggle(false)
    }

    useOnClickOutside(ref, onHandleClickOutside)

    return (
        <div onClick={onHandleClickOutside}>
            <div
                ref={ref}
                onClick={() => setBtnToggle(!btnToggle)}
                style={{ width: '38px', height: '38px', cursor: 'pointer' }}
                className='d-flex position-relative justify-content-center align-items-center rounded-circle'
            >
                <img
                    src={developer}
                    alt='profile'
                    style={{
                        width: '100%',
                        height: 'inherit',
                        objectFit: 'cover',
                        objectPosition: 'right',
                    }}
                    className='rounded-circle'
                />
            </div>
            {btnToggle ? <ProfileDropdown /> : null}
        </div>
    )
}

export default ProfileIcon

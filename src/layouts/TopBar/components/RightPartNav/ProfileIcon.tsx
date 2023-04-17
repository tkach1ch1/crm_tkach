import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import ProfileDropdown from './ProfileDropdown'
import developer from '../../../../assets/images/developer.jpg'

const ProfileIcon = () => {
    const [btnToggle, setBtnToggle] = useState(false)

    const refBtn = useRef(null)

    const onHandleClickOutside = () => {
        btnToggle && setBtnToggle(false)
    }

    useOnClickOutside(refBtn, onHandleClickOutside)

    return (
        <div
            onClick={onHandleClickOutside}
            ref={refBtn}
        >
            <div
                onClick={() => setBtnToggle(!btnToggle)}
                style={{ width: '38px', height: '38px', cursor: 'pointer' }}
                className='d-flex position-relative justify-content-center align-items-center rounded-circle'
            >
                <img
                    src={developer}
                    alt='profile'
                    style={{
                        height: 'inherit',
                        objectFit: 'cover',
                        objectPosition: 'right',
                    }}
                    className='rounded-circle w-100'
                />
            </div>
            {btnToggle ? <ProfileDropdown /> : null}
        </div>
    )
}

export default ProfileIcon

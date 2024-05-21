import React from 'react'
import { Link } from 'react-router-dom'
import styleModule from './index.module.scss'

const PopoverComponent = (props) => {
    const {handleLogout} = props
    return (
        <div className={styleModule.popover}>
            <div><Link to={'/profile'}>Thông tin tài khoản</Link></div>
            {/* <div><Link to={'/user-profile'}>Đơn hàng</Link></div> */}
            {/* <div>Đơn hàng</div> */}
            <div onClick={handleLogout}>Đăng xuất</div>
        </div>
    )
}

export default PopoverComponent
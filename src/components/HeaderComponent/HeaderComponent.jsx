import React, { useState } from 'react'
import PopoverComponent from '../PopoverComponent/PopoverComponent'
import { useDispatch } from 'react-redux'
import {resetUser} from '../../redux/slices/userSlice'
import styleModule from './index.module.scss'
import logo from '../../assets/images/logo.png'
const HeaderComponent = () => {
    const dispatch = useDispatch()
    const [isShowPopoverUser, setIsShowPopoverUser] = useState(false)
    const handleLogout = ()=>{
        dispatch(resetUser())
    }
  return (
    <div>
        <div className={styleModule.header}>
                <div className={styleModule.nav}>
                    <img src={logo} alt="" className={styleModule.logo} />
                    <div className={styleModule.header_left}><i className='fa-solid fa-bars' /></div>
                    <div className={styleModule.header_right}>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <i className='fa-solid fa-user' onClick={() => setIsShowPopoverUser(!isShowPopoverUser)} style={{ position: 'relative' }}>

                            {isShowPopoverUser && <PopoverComponent handleLogout={handleLogout} />}
                        </i>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HeaderComponent
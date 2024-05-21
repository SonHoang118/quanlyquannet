import React, { useState } from 'react'
import styleModule from '../UserPage/index.module.scss'
import logo from '../../assets/images/logo.png'
import PopoverComponent from '../../components/PopoverComponent/PopoverComponent'
import { useDispatch } from 'react-redux'
import {resetUser} from '../../redux/slices/userSlice'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'

const ReceptionPage = () => {
    return (
        <div>
            <HeaderComponent />
            <div className={styleModule.body}>
                <div className={styleModule.container}>

                    <div className={styleModule.action_group}>
                        <i className='fa-solid fa-money-bills'></i>
                        <span>Thu tiền</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <i className="fa-solid fa-wallet"></i>
                        <span>Nạp tài khoản</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <i className="fa-solid fa-desktop"></i>
                        <span>Đăng ký tài khoản</span>
                    </div>

                </div>
            </div>
            <div className={styleModule.footer}>
                <div className={styleModule.chat_plugin}><i className='fa-solid fa-comment'></i></div>
            </div>
        </div>
    )
}

export default ReceptionPage
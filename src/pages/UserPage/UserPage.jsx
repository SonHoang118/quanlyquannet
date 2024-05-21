import React, { useState } from 'react'
import styleModule from './index.module.scss'
import logo from '../../assets/images/logo.png'
import PopoverComponent from '../../components/PopoverComponent/PopoverComponent'
import { useDispatch } from 'react-redux'
import {resetUser} from '../../redux/slices/userSlice'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'

const UserPage = () => {
    
    return (
        <div>
            <HeaderComponent/>
            <div className={styleModule.body}>
                <div className={styleModule.container}>

                    <div className={styleModule.action_group}>
                        <i className='fa-solid fa-wallet'></i>
                        <span>Nạp tiền</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <i className="fa-solid fa-burger"></i>
                        <span>Đồ ăn</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <i className="fa-solid fa-desktop"></i>
                        <span>Đặt máy</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <i className="fa-solid fa-star"></i>
                        <span>Phản hồi</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <i className="fa-solid fa-money-bills"></i>
                        <span>Thanh toán</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <i className="fa-solid fa-circle-question"></i>
                        <span>Trợ giúp</span>
                    </div>

                </div>
            </div>
            <div className={styleModule.footer}>
                <div className={styleModule.chat_plugin}><i className='fa-solid fa-comment'></i></div>
            </div>
        </div>
    )
}

export default UserPage
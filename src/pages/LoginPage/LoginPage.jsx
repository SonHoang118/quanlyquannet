import React, { useState } from 'react'

import logo from '../../assets/images/logo.png'
import headerImg from '../../assets/images/headerImg.jpg'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import data from '../../data.json'
import { useDispatch } from 'react-redux'
import {updateUser} from '../../redux/slices/userSlice'

import styleModule from './index.module.scss'

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(checkInput()){
            const user = data.accounts.find((account)=>account.user_name === userName)
            if (user){
                dispatch(updateUser({userName: userName, password: password, auth: user.auth}))
                const toasSuccess =() => toast.success('Đăng nhập thành công')
                toasSuccess()
                navigate('/')
            }

        }
        
    }

    const checkInput = ()=>{
        if (!userName || !password){
            const toasWarning =() => toast.warning('Vui lòng nhập đủ các trường')
            toasWarning()
            return false
        } 
        const user = data.accounts.find((account)=>account.user_name === userName)
        if (!user){
            const toasWarning =() => toast.warning('Tài khoản hoặc mật khẩu sai')
            toasWarning()
            return false
        }
        if(user.user_name !== userName || user.password !== password){
            const toasWarning =() => toast.warning('Tài khoản hoặc mật khẩu sai')
            toasWarning()
            return false
        }
        return true
    }

    return (
        <div>
            <div className={styleModule.header}>
                <img className={styleModule.panel_header} src={headerImg} alt="" />
                <img className={styleModule.logo} src={logo} alt=""/>
                    {/* <img src= alt=""/> */}
                    <p className={styleModule.header_text}><span style={{fontWeight: 700,fontSize: 40,marginRight: 18}}>Dragon</span>Xin chào
                    </p>
            </div>
            <div className={styleModule.body}>
                <div className={styleModule.title}>Đăng nhập</div>
                <form>
                    <div className={styleModule.inputgroup}>
                        <input type="text" placeholder="Tên tài khoản" 
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                    </div>
                    <div className={styleModule.inputgroup}>
                        <input placeholder="Mật khẩu" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        />
                        <i className={`${styleModule.eyeIcon} ${showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}`} onClick={() => setShowPassword(!showPassword)}></i>
                    </div>
                    <div className={styleModule.option}>
                        <div className={styleModule.fogotpassword}>Quên mật khẩu?</div>
                        <div style={{cursor:'pointer'}} className={styleModule.toSignUp} onClick={()=>{navigate('/register')}}>Bạn chưa có tài khoản?</div>
                    </div>
                    <button onClick={e=>handleSubmit(e)}>Đăng nhập</button>
                </form>
            </div>
            <div className={styleModule.footer}>
                <div className={styleModule.social_login}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
                        alt="" />
                    <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png"
                        alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
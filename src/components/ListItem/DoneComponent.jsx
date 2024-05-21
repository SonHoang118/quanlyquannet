import React from 'react'
import styleModule from './index.module.scss'
import { useSelector } from 'react-redux'

const DoneComponent = () => {
    const userInfor = useSelector(state => state.user)
    return (
        <div style={{ width: '90%', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className={styleModule.list_item}>
                <img src="https://afamilycdn.com/thumb_w/600/150157425591193600/2022/6/3/mi-hanh-16541715573061480338336-1654228879051-16542288792701539936408-0-0-367-701-crop-1654242694613535528866.jpg" alt="" />
                <div className={styleModule.right}>
                    <div className={styleModule.name}>Mì tôm trứng</div>
                    <div className={styleModule.infor}>
                        <div className={styleModule.count}>số lượng 1</div>
                        <div className={styleModule.id}><i className="fa-solid fa-desktop"></i>máy 01</div>
                        <div className={styleModule.time}><i className="fa-regular fa-clock"></i>10 phút trước</div>
                    </div>
                </div>
                {userInfor.auth === 'reception' && (
                    <button className={styleModule.cancel_btn}>Hủy</button>
                )}
                {userInfor.auth === 'reception' && (
                    <button className={styleModule.submit_btn}>Đã giao</button>
                )}
            </div>
            
        </div>
    )
}

export default DoneComponent
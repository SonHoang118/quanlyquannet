import React, { useState } from 'react'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import styleModule from './index.module.scss'

import orderImg from '../../assets/images/002-order.png'
import cookingImg from '../../assets/images/005-cooking.png'
import deliveryImg from '../../assets/images/001-fast-delivery.png'
import menuImg from '../../assets/images/004-menu.png'
import harvestImg from '../../assets/images/003-harvest.png'
import OrderComponent from '../../components/ListItem/OrderComponent'
import CookingComponent from '../../components/ListItem/CookingComponent'
import DoneComponent from '../../components/ListItem/DoneComponent'

const ChefPage = () => {

    const renderComponent = (componentName) => {
        switch (componentName) {
            case 'order':
                return <OrderComponent />;
            case 'cooking':
                return <CookingComponent />;
            case 'done':
                return <DoneComponent  />;
            

            default:
                return <OrderComponent />;
        }
    };

    const [currentComponent, setCurrentComponent] = useState('order');
    return (
        <div>
            <HeaderComponent />
            <div className={styleModule.body}>
                <div className={styleModule.container}>

                    <div className={styleModule.action_group}>
                        <img src={menuImg} alt="" />
                        <span>Quản lý thực đơn</span>
                    </div>
                    <div className={styleModule.action_group}>
                        <img src={harvestImg} alt="" />
                        <span>Nguyên liệu</span>
                    </div>

                </div>
                <div className={styleModule.order_list}>
                    <div className={styleModule.list_header}>
                        <div onClick={()=>setCurrentComponent('order')}  style={{backgroundColor: currentComponent=='order'? '#ffc964' : '#f4f4f4'}}><img src={orderImg} />Đơn món</div>
                        <div onClick={()=>setCurrentComponent('cooking')} style={{backgroundColor: currentComponent=='cooking'? '#ffc964' : '#f4f4f4'}}><img src={cookingImg} alt="" />Đang nấu</div>
                        <div onClick={()=>setCurrentComponent('done')} style={{backgroundColor: currentComponent=='done'? '#ffc964' : '#f4f4f4'}}><img src={deliveryImg} alt="" />Đã xong</div>
                    </div>
                    <div className={styleModule.list_body}>
                    {renderComponent(currentComponent)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChefPage
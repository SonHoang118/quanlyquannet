import React, { useEffect } from 'react'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import styleModule from './index.module.scss'
import roomImg from '../../assets/images/003-room.png'
import staffImg from '../../assets/images/001-manager.png'
import chefImg from '../../assets/images/002-chef.png'
import revenue from '../../assets/images/001-revenue.png'
import LineChart from '../../components/LineChartComponent/LineChartComponent'
const Admin = () => {








    return (
        <div>

            <HeaderComponent />

            <div className={styleModule.body}>
                <div className={styleModule.statistical}>
                    <div className={styleModule.chart_container_circle}>
                        <div>
                            <div className={styleModule.pie_chart}></div>
                            <div className={styleModule.legend}>
                                <div className={styleModule.food}><span></span>Đồ ăn (35%)</div>
                                <div className={styleModule.may}><span></span>Máy (45%)</div>
                                <div className={styleModule.room}><span></span> Phòng (20%)</div>
                            </div>
                        </div>
                    </div>
                    <div className={styleModule.parameter} style={{marginTop:30}}>

                        <div className={styleModule.user}><i className="fa-solid fa-user"></i>số tài khoản <span>10000</span></div>
                        <div className={styleModule.user}><i className="fa-solid fa-desktop" />số lượng máy <span>150</span></div>
                        <div className={styleModule.user}><img src={roomImg} alt="" />số lượng phòng <span>30</span></div>
                        <div className={styleModule.user}><img src={staffImg} alt="" />số nhân viên <span>70</span></div>
                        <div className={styleModule.user}><img src={chefImg} alt="" />số đầu bếp <span>10</span></div>
                    </div>
                </div>
                <div className={styleModule.container}>
                    <div className={styleModule.container_left}>
                        <div className={styleModule.chart_container}>
                            <LineChart />
                        </div>

                    </div>
                    <div className={styleModule.container_right}>

                        <div className={styleModule.action_group}>
                            <img src={revenue} alt="" />
                            <span>Quản lý doanh thu</span>
                        </div>
                        <div className={styleModule.action_group}>
                            <img src={staffImg} alt="" />
                            <span>Quản lý nhân viên</span>
                        </div>
                        <div className={styleModule.action_group}>
                            <i className="fa-solid fa-burger"></i>
                            <span>Quản ký nhà bếp</span>
                        </div>
                        <div className={styleModule.action_group}>
                            <i className="fa-solid fa-desktop"></i>
                            <span>Quản lý máy</span>
                        </div>
                        <div className={styleModule.action_group}>
                            <img src={roomImg} alt="" />
                            <span>Quản lý phòng</span>
                        </div>
                        <div className={styleModule.action_group}>
                            <i className="fa-solid fa-user"></i>
                            <span>Quản lý khách hàng</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin










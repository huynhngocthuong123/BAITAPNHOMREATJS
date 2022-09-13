import React, { Fragment, useEffect } from 'react'
import "./Header.scss"
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DANG_XUAT } from '../../Redux/action/Type/TypeND'
import { QLNDReducer } from '../../Redux/Reducers/NDReducers'
export default function Header() {
    let { UserLogin } = useSelector((state) => state.QLNDReducer)
    const dispatch = useDispatch()
    console.log(UserLogin, "lấy ok")
    return (
        <nav className="HEADER">
            <div className='header_content'>
                <div className='header_left'>
                    <a href="">
                        <img className='img-fluid w-20' src="../img/logomovie.png" alt="" />
                    </a>
                </div>
                <div className='header_center'>
                    <a className="center_title" href="">Trang Chủ</a>
                    <a className="center_title" href="#hethongrap" >Hệ Thống Rạp</a>
                    <a className="center_title" href="#news" >Tin Tức</a>
                    <a className="center_title" href="#footer" >Liên Hệ</a>
                </div>
                <div className='header_right'>
                    {UserLogin !== null ? <Fragment>
                        <div className='title_right'>Xin Chào : {UserLogin.taiKhoan}</div>
                        <div className="dropdown">
                            <img className="img_info dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Thông Tin Tài Khoản</a>
                                <a className="dropdown-item" href="#">Chuyển Quyền Amin</a>
                                <a onClick={() => {
                                    dispatch({
                                        type: DANG_XUAT,
                                        dataDX: null
                                    })
                                }} className="dropdown-item" href="#">Đăng xuất</a>
                            </div>
                        </div>

                    </Fragment> : <Fragment>
                        <NavLink className="nav-link" to="/login">Đăng Nhập</NavLink>
                        <NavLink className="nav-link" to="/register">Đăng Ký</NavLink>
                    </Fragment>}
                </div>
            </div>
        </nav >
    )
}

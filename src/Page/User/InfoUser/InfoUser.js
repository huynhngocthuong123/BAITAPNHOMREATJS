import React from 'react'
import { useSelector } from 'react-redux'
// import "../infoUser.scss"
import "./InfoUser.scss"

export default function InfoUser(props) {
    // console.log(props.UserLogin, "lấy thành công")
    const { UserLogin } = useSelector(state => state.QLNDReducer)
    // let { taiKhoan, maLoaiNguoiDung, hoTen, soDT, email } = UserLogin
    console.log('userLogin:::::::::::::', UserLogin)
    return (
        <div className='Info'>
            <ul>
                <li className='info_title'>Tên Tài Khoản : {UserLogin?.taiKhoan}</li>
                <li className='info_title'>Số Điện Thoại : {UserLogin?.soDT}</li>
                <li className='info_title'>Họ và Tên : {UserLogin?.hoTen} </li>
                <li className='info_title'>Email : {UserLogin?.email}</li>
                <li className='info_title'>Mã Loại Người Dùng : {UserLogin?.maLoaiNguoiDung}</li>
            </ul>
        </div>
    )
}

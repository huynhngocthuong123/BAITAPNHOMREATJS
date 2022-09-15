import React from 'react'
// import "../infoUser.scss"
import "./InfoUser.scss"

export default function InfoUser(props) {
    // console.log(props.UserLogin, "lấy thành công")
    let { taiKhoan, maLoaiNguoiDung, hoTen, soDT, email } = props.UserLogin
    return (
        <div className='Info'>
            <ul>
                <li className='info_title'>Tên Tài Khoản : {taiKhoan}</li>
                <li className='info_title'>Số Điện Thoại : {soDT}</li>
                <li className='info_title'>Họ và Tên : {hoTen} </li>
                <li className='info_title'>Email : {email}</li>
                <li className='info_title'>Mã Loại Người Dùng : {maLoaiNguoiDung}</li>
            </ul>
        </div>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    // Trang chủ,Đặt vé, liên Hệ,Chi tiết phim,đăng ký, đăng nhập
    // RenderLogin = () => {
    //     // render giao diện đã login
    // }
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="#">Trang Chủ</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>

                </ul>
            </div>
        </nav >
    )
}

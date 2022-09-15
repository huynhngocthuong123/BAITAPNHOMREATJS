
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DANG_XUAT } from '../../Redux/action/Type/TypeND';
// import InfoUser from './InfoUser/InfoUser';
import InfoUser from '../User/InfoUser/InfoUser';
import "./ProFileUser.scss";
import UpdateUser from './UpdateUser/UpdateUser';
export default function ProFileUser(props) {
    const onChange = (key) => {
        console.log(key);
    };
    let { UserLogin } = props
    // console.log(UserLogin, "lay ok")
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='userlogin'>
            <div className='title_right'>Xin Chào : {UserLogin.taiKhoan}</div>
            <div className="dropdown">
                <img className="img_info dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <div className="dropdown-menu">
                    <button onClick={() => {
                        setIsModalOpen(true)
                    }} className="dropdown-item">Thông Tin Tài Khoản</button>
                    <a className="dropdown-item" href="#">Chuyển Quyền Amin</a>
                    <a onClick={() => {
                        dispatch({
                            type: DANG_XUAT,
                            dataDX: null
                        })
                    }} className="dropdown-item" href="#">Đăng xuất</a>
                </div>
            </div>
            {isModalOpen == true ?
                <div className='modal_tongle'>
                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Thông Tin Tài Khoản</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cập Nhập Tài Khoản</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Lịch Sử Đặt Vé</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><InfoUser UserLogin={UserLogin} /></div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><UpdateUser UserLogin={UserLogin} /></div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        </div>
                    </div>
                    <button onClick={() => {
                        setIsModalOpen(false)
                    }} className='btn btn-danger'>Đóng</button>
                </div> : null
            }
        </div>
    )
}

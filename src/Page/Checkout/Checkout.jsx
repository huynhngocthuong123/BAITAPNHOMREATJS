import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "antd";
import "./Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { datVeAction, layChiTietPhongVeAction } from "../../Redux/action/QuanLyDatVeAction";
import { DAT_VE } from "../../Redux/action/Type/QLDatVe";
import Header from "../../Component/Header/Header";
import FooterHome from "../Home/Footer/FooterHome";
import { ACCESS_TOKEN } from "../../Redux/action/Type/TypeND";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { History } from "history";
import { history } from "../../App";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Checkout(props) {
    let sortBy = require('lodash.sortby');
    const [disabled, setDisabled] = useState(true)
    const { UserLogin } = useSelector(state => state.QLNDReducer)
    console.log(UserLogin);

    const { chiTietPhongve, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
    console.log(danhSachGheDangDat);
    const { thongTinPhim, danhSachGhe } = chiTietPhongve

    const dispatch = useDispatch()
    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id)
        dispatch(action)
    }, [])

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            // ! tạo 3 biến class
            let ClassGheDaDat = ghe.daDat === true ? 'ghe-da-dat' : '';
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'ghe-vip' : '';
            let ClassGheDangDat = '';

            // ! duyển mảng ghế đang đặt, nếu mà mã ghế đang đặt = mã ghế thì trả về -1 và gán class = 'ghedangdat' để hiển thị màu xanh
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === ghe.maGhe);

            if (indexGheDangDat != -1) {
                ClassGheDangDat = 'ghe-dang-dat'
            }

            if (ghe.daDat | ClassGheDangDat === 'ghe-dang-dat') {
                classGheVip = '';
            }



            return <button onClick={() => {
                setDisabled(false)
                dispatch({
                    type: DAT_VE,
                    gheDuocChon: ghe
                })
            }} className={`ghe ${ClassGheDaDat} ${classGheVip} ${ClassGheDangDat}`} key={index}>
                {ghe.stt}
            </button>

        })
    }

    const datVe = () => {
        let thongTinDatVe = {
            maLichChieu: props.match.params.id,
            danhSachVe: danhSachGheDangDat,
        }
        dispatch(datVeAction(thongTinDatVe))
        console.log(thongTinDatVe);
    }

    const Modal = () => {
        Swal.fire({
            title: 'Vui lòng xác nhận đặt vé ?',
            icon: "question",
            showDenyButton: true,
            confirmButtonColor: `#3085d6`,
            denyButtonText: `Hủy`,
            confirmButtonText: `Xác Nhận`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                datVe()
                Swal.fire({
                    title: 'Bạn có muốn tiếp tục đặt vé không ?',
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonColor: `#3085d6`,
                    confirmButtonText: `Xác Nhận`,
                    denyButtonText: `Xem lịch sử`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        window.location.reload();
                    } else if (result.isDenied) {
                        history.push("/history");
                    }
                });
            } else if (result.isDenied) {
            }
        });
    }

    return (
        <Fragment>
            <Header />
            <div className="book__ticket">
                <div className="book__content myContainer">
                    <Row>
                        <Col className="book__left mx-auto my-2" span={14}>
                            <div className="screen mx-auto">
                                <p className="small text-center">Screen</p>
                            </div>
                            <div className="book__left-ghe text-center">
                                {renderGhe()}
                            </div>
                            <div className="book__left-loaighe d-flex">
                                <div className="loaighe-chuadat d-flex">
                                    <div className="ghe-chuaDat boxghe"></div>
                                    <p>Ghế chưa đặt</p>
                                </div>
                                <div className="loaighe-dangdat d-flex">
                                    <div className="ghe-dangdat boxghe"></div>
                                    <p>Ghế đang đặt</p>
                                </div>
                                <div className="loaighe-dadat d-flex">
                                    <div className="ghe-dadat boxghe"></div>
                                    <p>Ghế đã đặt</p>
                                </div>
                            </div>
                        </Col>

                        <Col className="book__right" span={10}>
                            <div className="info-film row">
                                <div className="info-img col-4">
                                    <img src={thongTinPhim?.hinhAnh} alt="" />
                                </div>
                                <div className="info-ve col-8">
                                    <p className="info-name">{thongTinPhim?.tenPhim}</p>
                                    <div className="ngaychieu d-flex">
                                        <p className="suatChieu__2D mr-3">2D</p>
                                        <p className="ngaygio">{thongTinPhim?.gioChieu} - {thongTinPhim?.ngayChieu} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-rap row">
                                <div className="rap-img col-4">
                                    <img src="https://du-an-phim-80edb.web.app/assets/img/rap-demo.jpg" alt="" />
                                </div>
                                <div className="rap-name col-8">
                                    <p className="rap-title">{thongTinPhim?.tenCumRap}</p>
                                    {/* <p className="small">{thongTinPhim?.diaChi}</p> */}
                                </div>
                            </div>
                            <div className="info-ghe row">
                                <div className="col-7">
                                    <p className="ghe-dat">{thongTinPhim?.tenRap} - Ghế Đang Đặt:</p>

                                    {sortBy(danhSachGheDangDat, ['stt']).map((ghedd, index) => {
                                        return <Fragment key={index} >
                                            <p className="ghedd-tenghe">{ghedd.stt}
                                            </p>
                                            {(index + 1) % 4 == 0 ? <br /> : null}
                                        </Fragment>
                                    })}

                                    <div className="tong__tien d-flex">
                                        <p p className="tong__tien-left">Tổng tiền:</p>
                                        <p className="tong__tien-right">
                                            {danhSachGheDangDat.reduce((tongtien, ghe, index) => {
                                                return tongtien += ghe.giaVe
                                            }, 0).toLocaleString()} VND
                                        </p>
                                    </div>
                                </div>
                                <div className="thoigian col-5">
                                    <p className="">Thời gian giữ ghế</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    disabled={disabled}
                                    data-toggle="modal"
                                    data-target="#modalConfirm"
                                    onClick={() => {
                                        if (danhSachGheDangDat.length == 0) {
                                            setDisabled(true)
                                        }
                                        else {
                                            setDisabled(false)
                                            Modal()
                                        }
                                    }} className="btn-muave">Mua Vé</button>
                            </div>
                        </Col>
                    </Row >
                </div >
            </div >
            <FooterHome />
        </Fragment>
    );
}







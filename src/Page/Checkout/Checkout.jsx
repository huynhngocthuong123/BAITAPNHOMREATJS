import React, { Fragment, useEffect } from "react";
import { Col, Row } from "antd";
import "./Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "../../Redux/action/QuanLyDatVeAction";
import { DAT_VE } from "../../Redux/action/Type/QLDatVe";

export default function Checkout(props) {

    let sortBy = require('lodash.sortby');
    // lấy thông tin từ reducer về
    const { chiTietPhongve, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
    const { thongTinPhim, danhSachGhe } = chiTietPhongve

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'ghe-vip' : '';
            let ClassGheDaDat = ghe.daDat === true ? 'ghe-da-dat' : '';
            let ClassGheDangDat = '';

            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === ghe.maGhe);

            if (indexGheDangDat != -1) {
                ClassGheDangDat = 'ghe-dang-dat'
            }

            return <button onClick={() => {
                dispatch({
                    type: DAT_VE,
                    gheDuocChon: ghe
                })
            }} className={`ghe ${classGheVip} ${ClassGheDaDat} ${ClassGheDangDat}`} key={index}>
                {ghe.stt}
            </button>
        })
    }

    const dispatch = useDispatch()
    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id)
        dispatch(action)
    }, [])

    return (
        <div className="book__ticket">
            <div className="book__content myContainer">
                <Row>
                    <Col className="book__left mx-auto my-2" span={14}>
                        <div className="screen mx-auto">
                            <p className="small text-center">Screen</p>
                        </div>
                        <div className="text-center">
                            {renderGhe()}
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
                            <button className="btn-muave">Mua Vé</button>
                        </div>
                    </Col>
                </Row >
            </div >
        </div >
    );
}






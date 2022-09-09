import React, { useEffect, useState } from 'react'
import "../DetailFilm/DetailFilm.scss"
import "../DetailFilm/circle.scss"
import { Tabs } from 'antd';
import { CHI_TIET_PHIM } from "../../Redux/action/Type/QLRapType";
import moment from 'moment'
import { Rate } from 'antd';
import YouTube from "react-youtube";
import { useSelector, useDispatch } from 'react-redux';
import { LayThongTinChiTietPhim } from '../../Redux/action/DetailHeThongRapAction';
import { NavLink } from 'react-router-dom';
import BannerTrailer from '../Home/CarouselHome/BannerTrailer/BannerTrailer';
import TrailerFilmDetail from '../../Component/TrailerFilmDetail';
const { TabPane } = Tabs
export default function DetailFilm(props) {

    const filmDetail = useSelector(state => state.DSFilmRecucer.filmDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(LayThongTinChiTietPhim(id));
    }, [])

    // ? sử dụng thư viện React-youtube truyền vào tham số /ID 
    // ? trailer = link/ID => cắt ID để truyền biến vào TrailerFilmDetail
    let trailer = filmDetail.trailer?.slice(30,filmDetail.trailer.legnth)
    console.log(trailer);

    return (
        <div className='movieInfo'>
            <div className='movie__intro'>
                <div className='full__background'>
                    <div className='carousel__img'>
                        <img src={filmDetail.hinhAnh} alt="" />
                    </div>
                </div>
                <div className='blur__overlay'></div>
                <div className='detail__info  myContainer'>
                    <div className="row">
                        <div className="movie__poster col-3">
                            <div className="poster__img d-flex justify-content-center align-items-center" >
                                <img className='w-100 h-100' src={filmDetail.hinhAnh} alt="" />
                                <div className='play__btn'>
                                    <i className='fa fa-play'></i>
                                </div>
                            </div>
                        </div>
                        <div className="movie__info col-6">
                            <div>
                                <div className='showtime'>Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}
                                </div>
                                <div>
                                    <span className='c18'>C18</span>
                                    <span className='movie__name'>{filmDetail.tenPhim}</span>
                                </div>
                                <a href="">
                                    <button className='btn btn-danger'>Mua Vé</button>
                                </a>
                            </div>
                        </div>
                        <div className="movie__rating  d-flex col-3">                          
                            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                                <span>{filmDetail.danhGia}</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <Rate className='rating__start' allowHalf value={filmDetail.danhGia / 2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='movie__detail'>
                <div className='detail__film'>
                    <Tabs defaultActiveKey="1" centered>
                        <Tabs.TabPane className='detail__lichchieu' tab="LỊCH CHIẾU" key="1" style={{ minHeight: 300 }}>
                            <div>
                                <Tabs tabPosition='left' defaultActiveKey="1">
                        // ! lần đầu duyệt map thì filmDetail null nên báo lỗi, thêm ?
                                    {filmDetail.heThongRapChieu?.map((value, index) => {
                                        return <Tabs.TabPane tab=
                                            {<div style={{ color: 'black' }}>
                                                <img className='mr-2' src={value.logo} width='50' height={50} alt="" />
                                                {value.tenHeThongRap}
                                            </div>}
                                            key={index}>

                                            {value.cumRapChieu?.map((cumRap, index) => {
                                                return <div className='mt-4' key={index}>
                                                    <div className='d-flex '>
                                                        <img style={{ width: 50, height: 50 }} src={cumRap.hinhAnh} alt="" />
                                                        <div className='ml-2'>
                                                            <span className='' style={{ fontSize: 17, fontWeight: 700 }}>{cumRap.tenCumRap}</span>
                                                            <p style={{ lineHeight: 2, color: 'gray' }}>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className='lich-chieu'>
                                                        <div className="row">
                                                            {cumRap.lichChieuPhim?.slice(0, 10).map((lichchieu, index) => {
                                                                return <NavLink to="/" className='col-3' key={index}>
                                                                    <p className='btn btn-time'>
                                                                        {moment(lichchieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                    </p>
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            })}

                                        </Tabs.TabPane>
                                    })}
                                </Tabs>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane className='detail__thongtin row' tab="THÔNG TIN" key="2" style={{ minHeight: 300 }}>
                            <div className="col-6 ">
                                <div className='row-info'>
                                    <div className="title-info">Ngày khởi chiếu</div>
                                    <div className="content-info">{moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</div>
                                </div>
                                <div className='row-info'>
                                    <div className="title-info">Đạo diễn</div>
                                    <div className="content-info">
                                        Quo vero architecto</div>
                                </div>
                                <div className='row-info'>
                                    <div className="title-info">Diễn viên</div>
                                    <div className="content-info">Lorem range, Ipsum dolor</div>
                                </div>
                                <div className='row-info'>
                                    <div className="title-info">Thể loại</div>
                                    <div className="content-info">
                                        Dramma, Vietsub</div>
                                </div>
                                <div className='row-info'>
                                    <div className="title-info">Định dạng</div>
                                    <div className="content-info">
                                        2D/Digital</div>
                                </div>
                                <div className='row-info'>
                                    <div className="title-info">Ngôn Ngữ</div>
                                    <div className="content-info">
                                        Tiếng Việt</div>
                                </div>
                            </div>
                            <div className="col-6 detail__thongtin-right">
                                <div className="title-info">Nội dung</div>
                                <div className="content-info">{filmDetail.moTa}</div>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane className='detail__danhgia' tab="ĐÁNH GIÁ" key="3" style={{ minHeight: 300 }}>
                            Content of Tab Pane 3
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>    
            {TrailerFilmDetail(trailer)}  
        </div>
    )
}



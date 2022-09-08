import React, { useState } from "react";
import { Tabs, Select } from "antd";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { layDSRap } from "../../../Redux/action/HeThongRapAction";
import moment from "moment/moment";
import "./DSHeThongRap.css";
import { NavLink } from "react-router-dom";
export default function DetailRap(props) {
  const { TabPane } = Tabs;
  let { DSHeThongRap } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSRap());
  }, []);
  const renderDSRap = () => {
    return DSHeThongRap?.map((loaiRap, index) => {
      return (
        <TabPane
          tab={
            <Fragment>
              <img
                style={{ height: "50px", width: "50px" }}
                src={loaiRap.logo}
                alt=""
              />
            </Fragment>
          }
          key={index}
        >
          <Tabs tabPosition="left">
            {loaiRap.lstCumRap?.map((CumRap, index) => {
              const Pstyle = {
                textAlign: "left",
                marginBottom: "0",
                fontWeight: 600,
              };
              return (
                <TabPane
                  tab={
                    <div className="AAA" style={{ width: 320 }}>
                      <div className="d-flex">
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src={loaiRap.logo}
                          alt=""
                        />
                        <div className="ml-2">
                          <p className="title_rap" style={Pstyle}>
                            {CumRap.tenCumRap}
                          </p>
                          <p
                            style={{
                              textAlign: "left",
                              color: "red",
                              fontWeight: 500,
                            }}
                          >
                            Chi Tiết
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {CumRap.danhSachPhim?.map((DSfilm, index) => {
                    return (
                      <Fragment key={index}>
                        <div
                          className=" mb-3 border-bottom pb-2"
                          style={{ display: "flex" }}
                        >
                          <img
                            className="img-fluid"
                            style={{ height: "80px", width: "80px" }}
                            src={DSfilm.hinhAnh}
                            alt=""
                            onError={(e) => (
                              (e.target.onerror = null),
                              (e.target.src =
                                "https://scr.vn/wp-content/uploads/2020/08/H%C3%8CNH-%E1%BA%A2NH-M%E1%BA%A0NG-%C4%90%E1%BA%B8P.jpg")
                            )}
                          />
                          <div className="ml-2">
                            <h6 style={{ fontSize: "17px" }} className="mb-0">
                              {DSfilm.tenPhim}
                            </h6>
                            {DSfilm.hot === true ? (
                              <div>
                                <i
                                  style={{ color: "red", fontSize: "11px" }}
                                  className="fa fa-heart mr-2"
                                ></i>
                                <span
                                  style={{ color: "red", fontSize: "11px" }}
                                >
                                  PHIM HOT
                                </span>
                              </div>
                            ) : (
                              <p></p>
                            )}
                            <p style={Pstyle}>{CumRap.diaChi}</p>
                            <div className="lichchieu">
                              {DSfilm.lstLichChieuTheoPhim
                                ?.slice(0, 15)
                                .map((giochieu, index) => {
                                  return (
                                    <div className="lichchieu_item" key={index}>
                                      <div className="">
                                        <NavLink
                                          className="lichchieu_time"
                                          style={{ color: "#5BBD2B" }}
                                          to="./"
                                        >
                                          {moment(
                                            giochieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div className="container" style={{ paddingLeft: 130 }}>
      <h6 className="title_hethong font-weight-bold">HỆ THỐNG RẠP</h6>
      <div className="rap_container">
        <Tabs tabPosition="left">{renderDSRap()}</Tabs>
      </div>
    </div>
  );
}

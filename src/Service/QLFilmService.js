import React from "react";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLFilmService extends ServicebaseAxios {
  layDSBanner = () => {
    return this.GET("/api/QuanLyPhim/LayDanhSachBanner");
  };
  layDSFilm = () => {
    return this.GET("/api/QuanLyPhim/LayDanhSachPhim");
  };
}
export const quanLyFilmService = new QLFilmService();

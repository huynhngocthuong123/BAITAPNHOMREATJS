import React, { Component } from 'react'
import ServicebaseAxios from './ServicebaseAxios'

export class QLNDService extends ServicebaseAxios {
    dangKyND = (thongTinDangKy) => {
        return this.POST("/api/QuanLyNguoiDung/DangKy", thongTinDangKy);
    }
    dangNhapND = (thongTinDangNhap) => {
        return this.POST("/api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
    }
    thongTinNguoiDung = () => {
        return this.POST("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
    }
}
export const NDService = new QLNDService();

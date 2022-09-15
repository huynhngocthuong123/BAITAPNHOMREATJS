import React from 'react'
import { NDService } from '../../Service/QLNDService';
import { CAP_NHAP, DANG_KY, DANG_NHAP, DANG_XUAT } from './Type/TypeND';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { history } from '../../App';


export const DangKyAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.dangKyND(thongTinND);
            if (result.data.statusCode == 200) {
                await dispatch2({
                    type: DANG_KY,
                    dataDK: result.data.content
                });
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bạn đã đăng ký thành công',
                    showConfirmButton: false,
                    timer: 1500
                });
                history.push("/login");
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const DangNhapAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.dangNhapND(thongTinND);
            if (result.data.statusCode == 200) {
                await dispatch2({
                    type: DANG_NHAP,
                    dataDN: result.data.content
                });
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                    showConfirmButton: false,
                    timer: 1500
                });
                history.push(`home/${result.data.content.taiKhoan}`);
            }
        } catch (error) {
            console.log(error)
            alert("tài khoản mật khẩu chưa chính xác")
        }
    }
}
export const updateUser = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.capNhapND(thongTinND);

            if (result.data.statusCode == 200) {
                console.log(result.data.content)

                await dispatch2({
                    type: CAP_NHAP,
                    dataCN: result.data.content
                });
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Cập nhập thành công',
                    showConfirmButton: false,
                    timer: 1500
                });
                await dispatch2({
                    type: DANG_XUAT,
                    dataDX: null
                })
                history.push("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

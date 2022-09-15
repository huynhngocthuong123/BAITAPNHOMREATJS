import { GPOUP_ID } from "../Util/setting";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLDatVeServices extends ServicebaseAxios {

    layChiTietPhongVe = (maLichChieu) => {
        return this.GET(
            `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        )
    }
}

export const QuanLyDatVeServices = new QLDatVeServices();




import { QuanLyDatVeServices } from "../../Service/QLDatVeServices";
import { CHI_TIET_PHONG_VE } from "./Type/QLDatVe";

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch2) => {
        try {
            const result = await QuanLyDatVeServices.layChiTietPhongVe(maLichChieu);
            console.log(result)
            dispatch2({
                type: CHI_TIET_PHONG_VE,
                chiTietPhongve: result.data.content
            });

        } catch (error) {
            console.log(error);
        }
    };
};

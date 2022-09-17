import { TOKEN_ND, USER_ND } from "../../Util/setting"
import { DANG_KY, DANG_NHAP, DANG_XUAT } from "../action/Type/TypeND"
let user = null
if (localStorage.getItem(USER_ND)) {
    user = JSON.parse(localStorage.getItem(USER_ND))
}

const initialState = {
    UserLogin: user,
    NDRegister: {},
    thongTinND: {},
}
export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_KY:
            state.NDRegister = action.dataDK
            return { ...state }
        case DANG_NHAP:
            state.UserLogin = action.dataDN
            localStorage.setItem(USER_ND, JSON.stringify(action.dataDN))
            localStorage.setItem(TOKEN_ND, action.dataDN.accessToken)
            return { ...state }
        case DANG_XUAT:
            state.UserLogin = action.dataDX
            localStorage.removeItem(USER_ND)
            localStorage.removeItem(TOKEN_ND)

            return { ...state }
        default:
            return state
    }
}

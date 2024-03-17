import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../actions/types";

//리듀서 함수 : 첫매개변수는 현재상태, 두번째 매개변수는 디스패치된 액션
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload };
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload };
            break;
        default:
            return state;
    }
}

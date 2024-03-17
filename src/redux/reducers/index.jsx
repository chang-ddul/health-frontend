import { combineReducers } from "redux"; //여러개의 리듀서를 하나로 합침
import user from "./user_reducer"; //사용자 상태관리 리듀서 import

// 여러개의 reducer를 하나로 합쳐준다.
const rootReducer = combineReducers({
    user,
});

export default rootReducer;

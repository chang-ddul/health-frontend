//user_action.jsx
import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

//회원가입
export function registerUser(dataToSubmit) {
    // //axios 방식
    // const request = axios.post("/api/users/register", dataToSubmit).then((res) => res.data);
    // return {
    //     type: REGISTER_USER,
    //     payload: request,
    // };
    const request = fetch("http://18.191.56.9:8080/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
    })
        .then((res) => res.json()) //응답을 JSON 형태로 파싱
        .then((data) => data); //데이터처리
    return {
        //redux store로 리턴
        type: REGISTER_USER,
        payload: request,
    };
}

//로그인
export function loginUser(dataToSubmit) {
    // const request = axios.post("/api/users/login", dataToSubmit).then((res) => res.data);
    // return {
    //     type: LOGIN_USER,
    //     payload: request,
    // };
    const request = fetch("http://18.191.56.9:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
    })
        .then((response) => {
            if (response.ok) {
                return response.json(); // 응답이 성공적이면 JSON으로 파싱
            } else {
                return response.json().then((text) => {
                    throw new Error(text);
                }); // 응답이 실패하면 JSON을 파싱하여 에러 메시지 추출
            }
        })
        .catch((error) => {
            // 에러 처리
            console.error("Error:", error);
        });

    return {
        //redux store로 리턴
        type: LOGIN_USER,
        payload: request,
    };
}
//사용자 인증 상태 확인하는 액션생성함수
export function auth() {
    const request = fetch("http://18.191.56.9:8080/users")
        .then((res) => res.json())
        .then((data) => data);
    return {
        //redux store로 리턴
        type: AUTH_USER,
        payload: request,
    };
}

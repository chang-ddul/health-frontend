import axios from "axios";

const URL=""; //백엔드 서버의 기본url

/* 기본 인스턴스 */
export const instance = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json';
    }
})

/* auth 인스턴스 */
export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  }
});
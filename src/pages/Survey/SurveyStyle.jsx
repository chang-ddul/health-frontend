import styled from "styled-components";

// 메인 테마 색상을 민트색으로 정의
const mintColor = "#2ecc71";
const lightGray = "#ecf0f1";
const darkText = "#34495e";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${lightGray}; /* 배경색을 옅은 회색으로 변경 */
`;

export const NextButton = styled.button`
    background-color: ${lightGray}; /* 기본 배경색을 옅은 회색으로 설정 */
    color: ${darkText}; /* 기본 글자색을 검은색으로 설정 */
    padding: 15px 32px;
    border: 2px solid ${lightGray}; /* 테두리색을 옅은 회색으로 설정 */
    border-radius: 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    cursor: pointer;
    width: 80%;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s; /* 배경색과 글자색 전환 효과 추가 */

    display: none; /* 기본 상태에서는 버튼을 숨김 */
`;

export const Input = styled.input`
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 2px solid ${darkText}; /* 테두리색을 검은색으로 설정 */
    border-radius: 30px;
    background-color: white;
    color: ${darkText}; /* 입력 텍스트 색상을 검은색으로 설정 */
`;

export const SelectButton = styled.button`
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 2px solid ${lightGray}; /* 테두리색을 옅은 회색으로 설정 */
    border-radius: 30px;
    background-color: ${lightGray}; /* 배경색을 옅은 회색으로 설정 */
    color: ${darkText}; /* 글자색을 검은색으로 설정 */
    cursor: pointer;
    appearance: none;
    transition: background-color 0.3s, color 0.3s; /* 배경색과 글자색 전환 효과 추가 */

    &:hover {
        background-color: ${mintColor}; /* hover 시 배경색을 민트색으로 변경 */
        color: white; /* hover 시 글자색을 흰색으로 변경 */
        border: 2px solid ${mintColor}; /* hover 시 테두리색을 민트색으로 변경 */
    }

    &:focus {
        border-color: ${mintColor}; /* 포커스 시 테두리색을 민트색으로 변경 */
        outline: none;
    }
    &:active {
        background-color: ${mintColor}; /* 클릭 시 배경색을 민트색으로 변경 */
        color: white; /* 클릭 시 글자색을 흰색으로 변경 */
        border: 2px solid ${mintColor}; /* 클릭 시 테두리색을 민트색으로 변경 */
    }
`;

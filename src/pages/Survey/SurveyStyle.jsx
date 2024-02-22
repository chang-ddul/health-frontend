import styled from "styled-components";

// 메인 테마 색상을 민트색으로 정의
const mintColor = "#3adcd7";
const lightGray = "#ecf0f1";
const darkText = "#34495e";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px; /* 컨테이너의 상단과 일정한 거리를 주기 위한 패딩 */
    justify-content: flex-start;
    height: 100vh;
    //background-color: ${lightGray}; /* 배경색을 옅은 회색으로 변경 */
    //position: relative; /* NextButton을 위한 기준이 될 수 있도록 */
`;

export const NextButton = styled.button`
    display: none; /* 기본 상태에서는 버튼을 숨김 */
    background-color: ${mintColor};
    color: white;
    padding: 15px 32px;
    border-radius: 10px;
    font-size: 16px;
    width: 90%;
    height: 60px;
    /* 화면 하단에 고정 */
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Input = styled.input`
    width: 80%;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 50px;
    box-sizing: border-box;
    border: 2px solid ${darkText}; /* 테두리색을 검은색으로 설정 */
    border-radius: 30px;
    background-color: white;
    color: ${darkText}; /* 입력 텍스트 색상을 검은색으로 설정 */
`;

export const SelectButton = styled.button`
    width: 90%;
    height: 70px;
    padding: 15px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 2px solid ${lightGray}; /* 테두리색을 옅은 회색으로 설정 */
    border-radius: 30px;
    background-color: ${lightGray}; /* 배경색을 옅은 회색으로 설정 */
    color: ${darkText}; /* 글자색을 검은색으로 설정 */
    font-size: 1.3rem;
    //font-weight: 700;
    /* cursor: pointer;
    appearance: none; */
    transition: background-color 0.3s, color 0.3s; /* 배경색과 글자색 전환 효과 추가 */

    &:hover {
        background-color: ${mintColor}; /* hover 시 배경색을 민트색으로 변경 */
        color: white; /* hover 시 글자색을 흰색으로 변경 */
        //border: 2px solid ${mintColor}; /* hover 시 테두리색을 민트색으로 변경 */
    }

    &:focus {
        background-color: ${mintColor}; /* 포커스 시 테두리색을 민트색으로 변경 */
        color: white;
        outline: none;
    }
    &:active {
        background-color: ${mintColor}; /* 클릭 시 배경색을 민트색으로 변경 */
        color: white; /* 클릭 시 글자색을 흰색으로 변경 */
        border: 2px solid ${mintColor}; /* 클릭 시 테두리색을 민트색으로 변경 */
    }
`;
export const Prompt = styled.span`
    font-size: 2.2rem;
    margin-bottom: 30px; /* 상단과 일정한 거리를 주기 위한 마진 */
    padding: 20px;
    width: 100%; /* 화면 전체 너비를 차지하도록 설정 */
    text-align: left; /* 왼쪽 정렬 */
`;

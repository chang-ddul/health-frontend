import styled from "styled-components";

const mintColor = "#3adcd7";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Input = styled.input`
    margin: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between; /* 로그인 버튼들을 가로로 나란히 정렬 */
    //width: 200px; /* 로그인 버튼들의 너비를 정의 */
`;
export const LoginButton = styled.button`
    margin: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: ${mintColor};
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #31b7b2;
    }
`;
export const Logo = styled.h1`
    font-size: 3rem; // 글자 크기를 증가시킵니다.
    position: absolute; // 절대 위치를 사용합니다.
    top: 10px; // 상단에서부터의 거리를 지정합니다.
    left: 50%; // 왼쪽에서부터 50%의 위치에 배치합니다.
    transform: translateX(-50%); // 정확한 중앙에 오도록 조정합니다.
    margin-top: 15vh; // 필요한 경우 상단 마진을 제거합니다.
`;

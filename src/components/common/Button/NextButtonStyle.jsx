import styled from "styled-components";

export const Button = styled.button`
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

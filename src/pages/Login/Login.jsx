import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import Input from "../../components/common/Input/Input";
import { Container, Logo, Input, ButtonContainer, LoginButton, Form } from "./LoginStyle";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        //백엔드와의 통신 로직 구현
        try {
            const response = await axios.post("/api/login", {
                username,
                password,
            });
            // 로그인 성공 처리
            console.log("로그인 성공:", response.data);
        } catch (error) {
            // 오류 처리
            console.error("로그인 실패:", error);
        }
    };

    return (
        <Container>
            <Logo>AIDIET</Logo>
            <h2>로그인</h2>
            <Form onSubmit={handleSubmit}>
                {/*form안에 로그인버튼을 누르면 자동으로 제출됨*/}
                <Input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonContainer>
                    <LoginButton type="submit">로그인</LoginButton>
                    <LoginButton>
                        <Link to="/signup">회원가입</Link>
                    </LoginButton>
                </ButtonContainer>
            </Form>
        </Container>
    );
}

export default Login;

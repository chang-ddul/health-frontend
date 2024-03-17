import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Container, Title, Section, ErrorMessage, SuccessMessage } from "./SignUpStyle";
import Input from "../../components/common/Input/Input";

const SignUp = () => {
    return (
        <>
            <Header />
            <Container>
                <Title>회원가입</Title>
                <form>
                    <Section>
                        <Input
                            label="이메일"
                            placeholder="이메일 주소를 입력해주세요"
                            id="email"
                            type="email"
                            name="email"
                            // hasError={emailErrorMsg != ""}
                            required
                        />
                        <Input
                            label="비밀번호"
                            placeholder="비밀번호를 입력해주세요"
                            id="password"
                            type="password"
                            name="password"
                            required
                        />
                        <Input
                            label="비밀번호 확인"
                            placeholder="비밀번호를 다시 한번 입력해주세요"
                            id="passwordCheck"
                            type="password"
                            name="passwordCheck"
                            required
                        />
                    </Section>
                    <button width="322px" type="submit">
                        다음
                    </button>
                </form>
            </Container>
        </>
    );
};

export default SignUp;

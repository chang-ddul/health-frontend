import React, { useState } from "react";
import { Container, SelectButton, Input, NextButton } from "./SurveyStyle";

const Survey = () => {
    const [page, setPage] = useState(0);
    const [surveyData, setSurveyData] = useState({
        sex: "",
        height: "",
        weight: "",
        age: "",
        purpose: "",
        activityLevel: "",
    });
    const [isSelectFocused, setIsSelectFocused] = useState(false);
    const handleSelectFocus = () => {
        setIsSelectFocused(true);
    };

    const handleSelectBlur = () => {
        setIsSelectFocused(false);
    };
    const handleInputChange = (key, value) => {
        setSurveyData({ ...surveyData, [key]: value });
    };

    const handleNextClick = () => {
        // 페이지가 4이하일 때 다음 페이지로, 그렇지 않으면 서버로 데이터 전송
        if (page < 4) {
            setPage(page + 1);
        } else {
            // 서버로 데이터 전송하는 로직
            console.log("Survey Data:", surveyData);
        }
    };

    // 입력 필드 렌더링 함수
    const renderInputField = (key, text, type = "text") => (
        <>
            <p>{text}</p>
            <Input type={type} value={surveyData[key]} onChange={(e) => handleInputChange(key, e.target.value)} />
        </>
    );

    // 셀렉트 필드 렌더링 함수
    const renderSelectField = (key, text, options) => (
        <>
            <p>{text}</p>
            <SelectButton value={surveyData[key]} onChange={(e) => handleInputChange(key, e.target.value)}>
                <option value="">선택하세요</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectButton>
            {isSelectFocused && (
                <NextButton
                    onClick={handleNextClick}
                    disabled={isNextButtonDisabled()}
                    style={{ display: "block" }} // Select가 포커스되면 버튼을 보이게 함
                >
                    다음
                </NextButton>
            )}
        </>
    );

    // 현재 페이지에 따라 렌더링되는 컴포넌트를 결정하는 함수
    const renderQuestion = () => {
        switch (page) {
            case 0: // 성별
                return renderSelectField("sex", "성별을 선택해 주세요", [
                    { label: "남자", value: "male" },
                    { label: "여자", value: "female" },
                ]);
            case 1: // 키, 몸무게, 나이
                return (
                    <>
                        {renderInputField("height", "키를 입력해주세요 (cm)", "number")}
                        {renderInputField("weight", "몸무게를 입력해주세요 (kg)", "number")}
                        {renderInputField("age", "나이를 입력해주세요", "number")}
                    </>
                );
            case 2: // 식단의 목적
                return renderSelectField("purpose", "식단으로 이루고 싶은 목표를 설정해주세요", [
                    { label: "다이어트", value: "diet" },
                    { label: "유지", value: "maintenance" },
                    { label: "벌크업", value: "bulkup" },
                ]);
            case 3: // 활동 강도
                return renderSelectField("activityLevel", "평소 활동량을 알려주세요", [
                    { label: "매우 적음", value: "VERYSMALL" },
                    { label: "적음", value: "SMALL" },
                    { label: "보통", value: "NORMAL" },
                    { label: "많음", value: "BIG" },
                    { label: "매우 많음", value: "VERYBIG" },
                ]);
            default:
                return <p>설문조사가 시작되었습니다.</p>;
        }
    };

    // '다음' 버튼의 비활성화 여부를 결정하는 함수
    const isNextButtonDisabled = () => {
        if (page === 1) {
            return surveyData.height === "" || surveyData.weight === "" || surveyData.age === "";
        }
        const currentKey = Object.keys(surveyData)[page];
        return surveyData[currentKey] === "";
    };

    return (
        <Container>
            {renderQuestion()}
            <NextButton onClick={handleNextClick} disabled={isNextButtonDisabled()}>
                다음
            </NextButton>
        </Container>
    );
};

export default Survey;

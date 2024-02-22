import React, { useState, useEffect } from "react";
import SurveyHeader from "../../components/Header/SurveyHeader";
import { Container, SelectButton, Input, NextButton, Prompt, Detail } from "./SurveyStyle";

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
    const [isInputFilled, setIsInputFilled] = useState(false);
    const handleSelectFocus = () => {
        //select버튼의 포커스 다룸
        setIsSelectFocused(true);
    };

    const handleNextClick = () => {
        // 페이지가 4이하일 때 다음 페이지로, 그렇지 않으면 서버로 데이터 전송
        if (page < 4) {
            setPage(page + 1);
            setIsSelectFocused(false); // 페이지 변경 시 NextButton 비활성화
        } else {
            // 서버로 데이터 전송하는 로직
            console.log("Survey Data:", surveyData);
        }
    };

    // 셀렉트 필드 렌더링 함수
    const renderSelectField = (key, text, options, detail) => (
        <>
            <Prompt>{text}</Prompt>

            {options.map((option, idx) => (
                <SelectButton
                    key={idx}
                    onClick={() => {
                        handleInputChange(key, option.value);
                        handleSelectFocus();
                        console.log("option.value: ", option.value);
                    }}
                    onFocus={handleSelectFocus} // 포커스가 되었을 때 상태 변경
                >
                    <option key={idx} value={option.value}>
                        {option.label}
                    </option>
                    {/* detail의 값이 존재할경우에만 렌더링 */}
                    {option.detail && <Detail>{option.detail}</Detail>}
                </SelectButton>
            ))}
            {isSelectFocused && ( //Select가 포커스될때 활성화됨
                <NextButton
                    onClick={handleNextClick}
                    style={{ display: "block" }} // Select가 포커스되면 버튼을 block요소로 보이게 함
                >
                    다음
                </NextButton>
            )}
        </>
    );

    // 입력 필드가 모두 채워졌는지 확인하는 함수
    const handleInputFilled = (data) => {
        // 현재 페이지에 따라 필요한 입력 필드를 확인
        let allFilled = false;
        if (page === 1) {
            // 키, 몸무게, 나이 페이지
            allFilled = data.height !== "" && data.weight !== "" && data.age !== "";
        }
        // 모든 필드가 채워졌는지에 따라 상태 업데이트
        setIsInputFilled(allFilled);
    };
    //입력(선택)값
    const handleInputChange = (key, value) => {
        const newData = { ...surveyData, [key]: value };
        setSurveyData(newData);
        console.log(newData);
        handleInputFilled(newData); // 새로운 데이터로 상태확인해서 인풋이 다 채워졌는지 확인
    };
    // 입력 필드 렌더링 함수
    const renderInputFields = (fields) => (
        <>
            {fields.map(({ key, text, type }, idx) => (
                <React.Fragment key={idx}>
                    <Prompt>{text}</Prompt>
                    <Input
                        id={key}
                        type={type}
                        value={surveyData[key]}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                    />
                </React.Fragment>
            ))}
            {isInputFilled && ( //Select가 포커스될때 활성화됨
                <NextButton
                    onClick={handleNextClick}
                    style={{ display: "block" }} // Select가 포커스되면 버튼을 block요소로 보이게 함
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
                return renderInputFields([
                    {
                        key: "height",
                        text: "키를 입력해주세요 (cm)",
                        type: "number",
                    },
                    {
                        key: "weight",
                        text: "몸무게를 입력해주세요 (kg)",
                        type: "number",
                    },
                    {
                        key: "age",
                        text: "나이를 입력해주세요",
                        type: "number",
                    },
                ]);
            case 2: // 식단의 목적
                return renderSelectField("purpose", "식단으로 이루고 싶은 목표를 설정해주세요", [
                    { label: "다이어트", value: "LOSS" },
                    { label: "유지", value: "MAINTAIN" },
                    { label: "벌크업", value: "GAIN" },
                ]);
            case 3: // 활동 강도
                return renderSelectField("activityLevel", "평소 활동량을 알려주세요", [
                    { label: "매우 적음", value: "VERYSMALL", detail: ": 활동이 적고 운동을 전혀 안 할 경우" },
                    { label: "적음", value: "SMALL", detail: ": 가벼운 활동 및 운동 (1~3일/주)" },
                    { label: "보통", value: "NORMAL", detail: ": 보통의 활동 및 운동 (3~5일/주)" },
                    { label: "많음", value: "BIG", detail: ": 적극적인 활동 및 운동 (6~7일/주)" },
                    { label: "매우 많음", value: "VERYBIG", detail: ": 매우 적극적인 활동 및 운동 " },
                ]);
            default:
                return <p>설문조사가 시작되었습니다.</p>;
        }
    };

    return (
        <>
            <SurveyHeader />
            <Container>{renderQuestion()}</Container>
        </>
    );
};

export default Survey;

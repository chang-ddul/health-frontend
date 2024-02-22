import styled from "styled-components";

export default function SurveyHeader() {
    return <Container>AIDIET</Container>;
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    height: 48px;
    z-index: 999;
    border-bottom: solid 1px;
    padding: 0 0 0 12px;
    font-size: 20px;
`;

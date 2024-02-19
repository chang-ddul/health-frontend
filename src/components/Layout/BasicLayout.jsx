import React from "react";
import styled from "styled-components";

const BasicLayout = ({ children }) => {
    return (
        <>
            <ParentContainer>
                <LayoutContainer>
                    <Screen>{children}</Screen>
                </LayoutContainer>
            </ParentContainer>
        </>
    );
};

export default BasicLayout;

const ParentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
`;

const LayoutContainer = styled.div`
    position: relative;
    width: 390px;
    height: 100vh;
    min-height: 100vh;
    box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
    background: white;
    @media (max-width: 768px) {
        margin: 0 auto;
        max-width: 100%;
    }
`;

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

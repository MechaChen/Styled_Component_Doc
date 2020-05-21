import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: papayawhip;
    text-align: center;
    font-family: verdana;
    color: palevioletred;
    padding: 20px 0 40px;
`;

const Title = styled.h2`
    margin: 0;
    padding: 30px;
`;

const Slogan = styled.p`
    width: 30%;
    margin: auto;
    padding: 10px 20px;
    border: 1px solid palevioletred;
`;

function HomePage() {
    return (
        <Background>
            <Title>Styled Components</Title>
            <Slogan>Let's Get Started</Slogan>
        </Background>    
    );
}

export default HomePage;


import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 40px 30px;
    background-color: papayawhip;
`;

const Button = styled.button`
    margin-right: 20px;
    padding: 10px 20px;
    border: 2px solid palevioletred;
    color: palevioletred;
    font-size: 18px;
    background-color: transparent;
`;

const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const PlumButton = styled(Button)`
    color: plum;
    border-color: plum;
`;

function HomePage() {
    return (
        <Wrapper>
            <Button>Normal Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>
            <PlumButton>Plum Button</PlumButton>
        </Wrapper>
    );
}

export default HomePage;

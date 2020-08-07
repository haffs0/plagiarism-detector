import React from 'react';
import styled from "styled-components";


const Result = ({location}) => {
    return <Wrapper>
                <p>The essay is {location.state.result}% similar</p>
           </Wrapper>
}


export default Result;

const Wrapper = styled.div`
    display: grid;
    place-content: center center;
    font-size: 18px;
    margin-top: 100px;
`
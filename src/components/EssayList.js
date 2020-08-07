import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { fetchEssay } from "../api/index";
import Essay from "./Essay";
import { textCosineSimilarity } from "../helper/cosine-similarity";


const EssayList = () => {
    const [essay, setEssay] = useState([])
    const [similarity, setSimilarity] = useState(0)
    const [redirect, setRedirect] = useState(false)
    useEffect( () => {
        fetchEssay().then(res => {
            setEssay(res.data)
        })
    }, [essay])
    const essayList = () => essay.map(ele => <Essay key={ele.id} {...ele} /> )
    const handleClick = () => {
        const firstEssay = essay[0].essay
        const secondEssay = essay[1].essay

        const result = textCosineSimilarity(firstEssay, secondEssay)
        if (result) {
            setSimilarity(result)
            setRedirect(!redirect)
        }
    }
    return(
        <Wrapper>
            <div className="essay">{essayList()}</div>
            <div className="btn"><button onClick={handleClick}>Compare</button></div>
            {redirect ?<Redirect
                to={{
                    pathname: "/result",
                    state: { result: similarity }
                }}
            /> : null}
        </Wrapper>
    )
}


export default EssayList;

const Wrapper = styled.div`
    margin: auto 20px;
    font-size: 16px;
    & .essay {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
        }
    }
    & .btn {
        display: grid;
        place-content: center center;
        margin-top: 20px;
    }
    & button {
        font-weight: bold;
        border: 0;
        background: #12c064;
        color: #fff;
        padding: 10px 20px;
        font-size: 14px;
        text-transform: uppercase;
    }
`
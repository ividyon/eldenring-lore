import styled from "styled-components";
import parchment from "../../assets/parchment2.jpg";

interface StyledCardProps {
    offset: number
}

export const StyledCard = styled.div<StyledCardProps>`
    /* background: #FCF5E5; */
    /* color: black;
    background: url(${parchment}) 100%/100%;
    background-position-x: ${props => props.offset}%;
    background-position-y: ${props => props.offset}%; */
    position: relative;

    background: linear-gradient(135deg, rgb(40,40,40), rgb(32, 32, 32));

    padding: 1em;

    margin: 1em;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 2px 1px 20px rgba(0,0,0,0.6);

    &:not(:last-child) {
        margin-bottom: 2.4rem;
    }

    & strong {
        text-shadow: 1px 1px 2px black,
        1px 1px 2px black,
        1px 1px 2px black,
        1px 1px 2px black;
    }
`

export const CardBody = styled.div`
    margin: 1em 0;
`

export const CardRelevance = styled.aside`
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 1.6rem;
    color: #AAA;
`

export const CardHeader = styled.h3`
    font-size: 3.2rem;
    /* font-weight: 500; */
    text-shadow: 1px 1px 4px black,
    1px 1px 4px black,
    1px 1px 4px black;
    margin: 0;
`
import styled from "styled-components";

export const StyledSearchBar = styled.input`
    width: 100vw;
    transform: translate(calc(-50% + 200px), 0);
    background: none;
    color: white;
    display: block;
    margin: auto;
    border: none;
    padding: 0 32px 16px;
    font-size: 48px;
    line-height: 1;
    text-align: center;
    z-index: 1;
    text-shadow: 1px 1px 4px black,
    1px 1px 4px black,
    1px 1px 4px black,
    1px 1px 4px black,
    1px 1px 4px black;
`

export const SearchBarContainer = styled.div`
    width: 400px;
    display: inline-block;
    background: radial-gradient(ellipse closest-side, rgba(0,0,0,0.6), transparent);
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 22px;
        height: 3px;
        width: 100%;
        display: block;
        background: radial-gradient(ellipse closest-side, white, transparent);
        z-index: -1;
    }
`

export const SearchLabel = styled.p`
    margin: 0 0 1em;
`

export const StyledSearchForm = styled.form`
    display: block;
    padding: 1em;
    text-align: center;
`
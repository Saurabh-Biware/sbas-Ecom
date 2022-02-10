import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

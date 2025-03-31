import { styled } from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    //O padding é de 24 px, convertendo para rem = 24/16 = 1.5rem
    padding: 1.5rem;
    width: 100%;

    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

`
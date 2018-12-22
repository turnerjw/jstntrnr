import styled, { keyframes } from "styled-components";

const morph = keyframes`
    0%{
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    }
    100%{
        border-radius: 40% 60%;
    }
`;

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const Blob = styled.div`
    width: 100%;
    height: 20rem;
    overflow: hidden;
    position: relative;
    ::before,
    ::after {
        content: "";
        position: absolute;
        left: 1rem;
        will-change: border-radius, transform;
        top: 50%;
    }

    ::before {
        width: 15rem;
        height: 15rem;
        margin-top: -7.5rem;
        animation: ${morph} 7s infinite linear alternate-reverse,
            ${spin} 25s infinite linear reverse;
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.fg},
            ${({ theme }) => theme.blue} 60%
        );
    }

    ::after {
        width: 13rem;
        height: 13rem;
        margin-top: -6.5rem;
        border: 1px solid ${({ theme }) => theme.bg};
        animation: ${morph} 4s infinite linear alternate,
            ${spin} 20s infinite linear;
        background: linear-gradient(
            to top right,
            ${({ theme }) => theme.red},
            ${({ theme }) => theme.yellow}
        );
    }
`;

export default Blob;

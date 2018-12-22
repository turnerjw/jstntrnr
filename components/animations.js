import { keyframes } from "styled-components";

export const fadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-2rem);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(2rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

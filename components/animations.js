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

export const scrollIndicatorAnimation = keyframes`
0%{
    transform-origin: bottom;
    transform: scaleY(0);
}
25%{
    transform-origin: bottom;
    transform: scaleY(1);
}
26%{
    transform-origin: top;
}
50%{
    transform-origin: top;
    transform: scaleY(0);
}
100%{
    transform-origin: top;
    transform: scaleY(0);
}
`;

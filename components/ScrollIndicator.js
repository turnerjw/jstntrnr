import styled from "styled-components";
import { scrollIndicatorAnimation } from "./animations";

const ScrollIndicator = styled.div`
    transform: scaleY(0);
    width: 2px;
    height: 10rem;
    background: ${({ theme }) => theme.fg};
    animation: ${scrollIndicatorAnimation} 2s cubic-bezier(0.77, 0, 0.18, 1)
        infinite;
    animation-delay: 2s;
`;

export default ScrollIndicator;

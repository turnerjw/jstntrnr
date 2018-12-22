import styled from "styled-components";

const EntryAnimation = styled.div`
    opacity: ${({ startOpacity }) => startOpacity};
    animation: ${({ animation }) => animation} ease 0.4s forwards;
    animation-delay: ${({ delay }) => delay};
`;

export default EntryAnimation;

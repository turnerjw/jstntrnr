import styled from "styled-components";

const BoldBox = styled.div`
    background: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    padding: 1rem;
`;

export default BoldBox;

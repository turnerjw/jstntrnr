import styled from "styled-components";

const GridItem = styled.div`
    grid-column: ${({ columns, smallColumns }) =>
        smallColumns || columns || "1 / -1"};
    grid-row: ${({ rows, smallRows }) => smallRows || rows || "auto"};
    z-index: ${({ zIndex }) => zIndex};
    align-self: ${({ alignSelf, smallAlignSelf }) =>
        smallAlignSelf || alignSelf};

    @media (min-width: 1000px) {
        grid-column: ${({ columns }) => columns || "1 / -1"};
        grid-row: ${({ rows }) => rows || "auto"};
        align-self: ${({ alignSelf }) => alignSelf};
    }
`;

export default GridItem;

import styled from "styled-components";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
`;

export default GridContainer;

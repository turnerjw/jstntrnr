import styled from "styled-components";

const GridContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
`;

export default GridContainer;

import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import BigImageAnim from "./BigImageAnim";
import GridContainer from "./styled/GridContainer";
import GridItem from "./styled/GridItem";
import GridRow from "./styled/GridRow";

const BoldBox = styled.div`
    background: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    padding: 1rem;
`;

const TestGrid = () => (
    <GridContainer columns="repeat(12, 1fr)" rows="100vh auto">
        <GridRow rows="1">
            <GridItem columns="3 / -1" smallColumns="1 / -1" alignSelf="center">
                <BigImageAnim src="/static/spvcepvndv.png" />
            </GridItem>
            <GridItem
                columns="2 / 5"
                smallColumns="2 / 12"
                alignSelf="center"
                zIndex="10"
            >
                <Parallax offsetYMax={100} offsetYMin={-100}>
                    <BoldBox>
                        <h2>Red Pandas</h2>
                        <h3>They're pretty neat</h3>
                    </BoldBox>
                </Parallax>
            </GridItem>
        </GridRow>
        <GridItem rows="2">
            <BigImageAnim src="/static/spvce.png" />
        </GridItem>
        <GridItem
            columns="2 / 5"
            smallColumns="2 / 12"
            rows="2"
            alignSelf="end"
            zIndex="10"
        >
            <Parallax offsetYMax={40} offsetYMin={-40}>
                <BoldBox>
                    <h2>Red Pandas</h2>
                    <h3>They're pretty neat</h3>
                </BoldBox>
            </Parallax>
        </GridItem>

        <GridItem
            columns="3 / -1"
            smallColumns="1 / -1"
            rows="3"
            alignSelf="center"
        >
            <BigImageAnim src="/static/spvcepvndv.png" />
        </GridItem>
        <GridItem
            columns="2 / 5"
            rows="3"
            smallColumns="2 / 12"
            alignSelf="center"
            zIndex="10"
        >
            <Parallax offsetYMax={100} offsetYMin={-100}>
                <BoldBox>
                    <h2>Red Pandas</h2>
                    <h3>They're pretty neat</h3>
                </BoldBox>
            </Parallax>
        </GridItem>
    </GridContainer>
);

export default TestGrid;

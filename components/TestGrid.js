import styled, { keyframes } from "styled-components";
import { Parallax } from "react-scroll-parallax";
import BigImageAnim from "./BigImageAnim";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import GridRow from "./GridRow";
import BoldBox from "./BoldBox";
import Blob from "./Blob";

const TestGrid = () => (
    <GridContainer columns="repeat(12, 1fr)" rows="100vh auto">
        <GridRow rows="1">
            <GridItem columns="2 / 8" alignSelf="center">
                <h1>jstntrnr.com</h1>
                <h3>
                    I'm Justin, a software developer in Toronto.
                    <br />
                    Welcome to my website.
                </h3>
            </GridItem>
            <GridItem columns="9 / -1" alignSelf="center">
                <Parallax
                    offsetYMax={100}
                    offsetYMin={-100}
                    slowerScrollRate={true}
                >
                    <Blob />
                </Parallax>
            </GridItem>
        </GridRow>
        <GridRow rows="2">
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
        <GridRow rows="3">
            <GridItem>
                <BigImageAnim src="/static/spvce.png" />
            </GridItem>
            <GridItem
                columns="2 / 5"
                smallColumns="2 / 12"
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
        </GridRow>
        <GridRow rows="4">
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
    </GridContainer>
);

export default TestGrid;

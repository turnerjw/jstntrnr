import { NextPage } from "next";
import GridContainer from "../components/GridContainer";
import GridRow from "../components/GridRow";
import GridItem from "../components/GridItem";

const Projects: NextPage = () => (
    <GridContainer columns="repeat(12, 1fr)" rows="1fr auto auto auto 1fr auto">
        <GridRow rows="1">
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="2">
                <h1 style={{ marginTop: "10rem" }}>Projects</h1>
                <h3 style={{ marginBottom: "10rem" }}>
                    Some of the things I made outside of work
                </h3>
            </GridItem>
        </GridRow>
        <GridRow rows="10">
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="11">
                <h2>Robin's Whiteboard</h2>
            </GridItem>
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="12">
                <h3>The tally counter from Stanger Things 3</h3>
                <a href="https://github.com/turnerjw/you-rule-you-suck">
                    GitHub
                </a>
                <br />
                <a href="https://robins-whiteboard.jstntrnr.com">
                    View it live
                </a>
            </GridItem>
            <GridItem
                columns="6 / 12"
                smallColumns="2 / 12"
                rows="12"
                smallRows="13"
            >
                <img
                    style={{ width: "100%" }}
                    src="/static/robins-whiteboard.png"
                    alt="Robin's Whiteboard"
                />
            </GridItem>
        </GridRow>
        <GridRow rows="20">
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="21">
                <h2 style={{ marginTop: "3rem" }}>Polysaur</h2>
            </GridItem>
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="22">
                <h3>Animated polygons showing Bulbasaur's evolutions</h3>
                <a href="https://github.com/turnerjw/poly-gallery-demo">
                    GitHub
                </a>
                <br />
                <a href="https://polysaur.jstntrnr.com">View it live</a>
            </GridItem>
            <GridItem
                columns="6 / 12"
                smallColumns="2 / 12"
                rows="22"
                smallRows="23"
            >
                <img
                    style={{ width: "100%" }}
                    src="/static/polysaur.png"
                    alt="Robin's Whiteboard"
                />
            </GridItem>
        </GridRow>
    </GridContainer>
);

export default Projects;

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Rellax from "rellax";
import BigImageAnim from "./BigImageAnim";

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: ${({ height }) => height};
    overflow: hidden;
`;

const Headline = styled.div`
    grid-column: 2 / 8;
    grid-row: 1;
    z-index: 2;
    align-self: center;
`;

const morph = keyframes`
    0%{
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    }
    100%{
        border-radius: 40% 60%;
    }
`;

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const Blob = styled.div`
    ::before {
        content: "";
        position: absolute;
        border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
        border: 1px solid ${({ theme }) => theme.bg};
        will-change: border-radius, transform;
        transform-style: preserve-3d;
        transform: translateZ(0);
    }
    height: 15rem;
    width: 15rem;
    z-index: 1;
    grid-column: 9 / -1;
    grid-row: 1;
    align-self: center;
    transform-style: preserve-3d;
`;

const GradientBlob = styled(Blob)`
    padding-top: 2rem;
    ::before {
        height: 13rem;
        width: 13rem;
        animation: ${morph} 4s infinite linear alternate,
            ${spin} 20s infinite linear;
        background: linear-gradient(
            to top right,
            ${({ theme }) => theme.red},
            ${({ theme }) => theme.yellow}
        );
    }
`;

const BlueBlob = styled(Blob)`
    ::before {
        height: 15rem;
        width: 15rem;
        animation: ${morph} 7s infinite linear alternate-reverse,
            ${spin} 25s infinite linear reverse;
        background: linear-gradient(
            to bottom right,
            ${({ theme }) => theme.fg},
            ${({ theme }) => theme.blue} 60%
        );
    }
`;

const BigEmoji = styled.div`
    z-index: 3;
    font-size: ${({ size }) => size}rem;
    grid-column: ${props => props.columnStart || 1} /
        ${props => props.columnEnd || -1};
    grid-row: 1 / -1;
    align-self: center;
    position: relative;
    top: -3rem;
`;

const FloatingBox = styled.div`
    z-index: 2;
    padding: 1rem;
    grid-column: ${props => props.columnStart || 1} /
        ${props => props.columnEnd || -1};
    grid-row: 1 / -1;
    align-self: center;
    background: black;
    color: white;
`;

class ParallaxTest extends Component {
    constructor(props) {
        super(props);
        this.state = { rellax: undefined };
    }

    componentDidMount() {
        var rellax = new Rellax(".rellax", { center: true });
        this.setState({
            rellax: rellax
        });
    }

    componentWillUnmount() {
        const { rellax } = this.state;
        rellax.destroy();
    }

    render() {
        return (
            <div>
                <GridBox height="100vh">
                    <Headline>
                        <h1>jstntrnr.com</h1>
                        <h3>
                            I'm Justin, a software developer in Toronto.
                            <br />
                            Welcome to my website.
                        </h3>
                    </Headline>
                    <BlueBlob className="rellax" data-rellax-speed="3" />
                    <GradientBlob className="rellax" data-rellax-speed="4" />
                </GridBox>
                <GridBox>
                    <BigImageAnim
                        src="/static/spvce.png"
                        columnStart="3"
                        columnEnd="13"
                    />
                    <FloatingBox
                        columnStart="2"
                        columnEnd="5"
                        className="rellax"
                        data-rellax-speed="3"
                    >
                        <h2>Graphics</h2>
                        <h3>Sometimes I play around in Photoshop</h3>
                    </FloatingBox>
                </GridBox>
                <GridBox>
                    <BigImageAnim
                        src="/static/spvcepvndv.png"
                        columnStart="1"
                        columnEnd="11"
                    />
                    <FloatingBox
                        columnStart="9"
                        columnEnd="12"
                        className="rellax"
                        data-rellax-speed="3"
                    >
                        <h2>Red Pandas</h2>
                        <h3>They're pretty neat</h3>
                    </FloatingBox>
                </GridBox>
                <GridBox>
                    <BigImageAnim
                        src="/static/spvce.png"
                        columnStart="3"
                        columnEnd="13"
                    />
                </GridBox>
            </div>
        );
    }
}

export default ParallaxTest;

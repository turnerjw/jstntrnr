import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Rellax from "rellax";
import { Parallax } from "react-scroll-parallax";
import BigImageAnim from "./BigImageAnim";

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

const fadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-2rem);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(2rem);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const growUp = keyframes`
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }
`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: ${({ height }) => height};
    margin: ${({ verticalMargin }) => verticalMargin} 0;
`;

const Headline = styled.div`
    grid-column: 2 / 8;
    grid-row: 1;
    z-index: 2;
    align-self: center;
    animation: ${fadeInRight} ease 0.4s forwards;
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
        top: 50%;
        left: 0.5rem;
    }
    width: 100%;
    height: 75%;
    overflow: hidden;
    z-index: 1;
    grid-column: 9 / -1;
    grid-row: 1;
    align-self: center;
    transform-style: preserve-3d;
    //opacity: 0;
    //animation: ${fadeInUp} ease 0.4s forwards;
    //animation-delay: 0.2s;
`;

const GradientBlob = styled(Blob)`
    ::before {
        height: 13rem;
        width: 13rem;
        margin-top: -6.5rem;
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
        margin-top: -7.5rem;
        animation: ${morph} 7s infinite linear alternate-reverse,
            ${spin} 25s infinite linear reverse;
        background: linear-gradient(
            to bottom right,
            ${({ theme }) => theme.fg},
            ${({ theme }) => theme.blue} 60%
        );
    }
`;

const Navbar = styled(GridBox)`
    z-index: 10;
    position: sticky;
    top: 0;
    h3 {
        font-size: 1.5rem;
        padding: 0.5rem;
        background: linear-gradient(
            to top right,
            ${({ theme }) => theme.fg},
            ${({ theme }) => theme.blue}
        );
        color: ${({ theme }) => theme.bg};
        justify-self: left;

        font-variation-settings: "wght" 850;
        margin: 1rem 0;
        text-transform: uppercase;
    }
`;

const VerticleBar = styled.div`
    justify-self: center;
    align-self: end;
    height: 20rem;
    ::before {
        content: "";
        position: absolute;
        background: ${({ theme }) => theme.fg};
        margin: 1rem;
        width: 0.1rem;
        height: 20rem;
        transform: scaleY(0);
        transform-origin: bottom;
        animation: ${growUp} ease 0.4s forwards;
        animation-delay: 0.8s;
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
    align-self: end;
    background: black;
    color: white;
    grid-column: 2 / -2;
    grid-row: 1 / -1;

    @media (min-width: 1000px) {
        grid-column: ${props => props.columnStart || 1} /
            ${props => props.columnEnd || -1};
        grid-row: 1 / -1;
        align-self: center;
    }
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
                    <VerticleBar className="rellax" data-rellax-speed="5" />
                    <Headline>
                        <h1>jstntrnr.com</h1>
                        <h3>
                            I'm Justin, a software developer in Toronto.
                            <br />
                            Welcome to my website.
                        </h3>
                    </Headline>
                    <BlueBlob className="rellax" data-rellax-speed="5" />
                    <GradientBlob className="rellax" data-rellax-speed="6" />
                </GridBox>
                <Navbar>
                    <h3>jt</h3>
                </Navbar>
                <GridBox verticalMargin="3rem">
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

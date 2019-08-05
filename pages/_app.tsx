import * as React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { ParallaxProvider } from "react-scroll-parallax";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
    faBars,
    faTimes,
    faEnvelope,
    faSpinner,
    faCheck,
    faExclamation
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavMenu from "../components/NavMenu";

library.add(
    faBars,
    faTimes,
    faEnvelope,
    faSpinner,
    faCheck,
    faExclamation,
    faGithub,
    faLinkedin
);
config.autoAddCss = false;

const theme = {
    bg: "#F4F4F4",
    fg: "#070707",
    blue: "rgba(29, 96, 179, 1)",
    red: "rgba(255, 0, 133, 1)",
    yellow: "rgba(255, 200, 0, 1)"
};

const GlobalStyle = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: "jostvf";
        src: url("/static/Jost-VF.ttf") format("truetype");
    }
    body{
        font-family: "jostvf";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 10px;
        background: ${theme.bg};
        color: ${theme.fg};
    }
    h1{
        font-size: 2.5rem;
        font-variation-settings: "wght" 600;
        line-height: 1.2;

        @media (min-width: 426px){
            font-size: 3rem;
        }
        
    }
    h2{
        font-size: 1.5rem;
        text-transform: uppercase;
        font-variation-settings: "wght" 700;
        letter-spacing: 0.2rem;
        line-height: 1.2;
        margin-bottom: 1rem;
    }
    a, h3{
        font-size: 1rem;
        font-variation-settings: "wght" 500;
        line-height: 1.5;
        margin-bottom: 2rem;
    }
    a {
        color: ${theme.fg};
        text-decoration: underline;
        font-size: 1.1rem;
    }
    p{
        font-size: 1.2rem;
        font-variation-settings: "wght" 300;
        line-height: 1.5;

        @media (min-width: 1000px){
            padding-right: 5rem;
        }
    }
    input, textarea{
        font-family: "jostvf";
        font-size: 1rem;
        box-sizing: border-box;
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 1px solid ${theme.fg};
        background: ${theme.bg};
        color: ${theme.fg};
        ::placeholder{
            font-variation-settings: "wght" 400, "ital" 1;
        }
    }
    textarea{
        resize: vertical;
    }
    button{
        ::before{
            content: "";
            position: absolute;
            height: 4px;
            width: 100%;
            background: linear-gradient(
                to right,
                ${theme.red},
                ${theme.yellow}
            );
            left: 0;
            bottom: 0;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.1s ease;
        }
        position: relative;
        display: inline-block;
        font-family: "jostvf";
        font-size: 1rem;
        box-sizing: border-box;
        margin: 0.5rem 0;
        padding: 0.5rem 1.5rem;
        border: none;
        background: ${theme.fg};
        color: ${theme.bg};
        cursor: pointer;

        &:hover{
            ::before{
                transform: scaleX(1);
            }
            &:disabled{
                ::before{
                    transform: scaleX(0);
                }
            }
        }
    }
`;

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                </Head>
                <GlobalStyle />
                <ParallaxProvider>
                    <ThemeProvider theme={theme}>
                        <NavMenu>
                            <Component {...pageProps} />
                        </NavMenu>
                    </ThemeProvider>
                </ParallaxProvider>
            </Container>
        );
    }
}

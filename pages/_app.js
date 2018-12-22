import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { ParallaxProvider } from "react-scroll-parallax";

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
    h3{
        font-size: 1rem;
        font-variation-settings: "wght" 500;
        line-height: 1.5;
        margin-bottom: 2rem;
    }
    p{
        font-size: 1.2rem;
        font-variation-settings: "wght" 300;
        line-height: 1.5;
    }
`;

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

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
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ParallaxProvider>
            </Container>
        );
    }
}

import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const theme = {
    offWhite: "#F4F4F4",
    black: "#070707",
    pink: "#E900FF",
    blue: "#44D3FF",
    red: "#FF3A5B"
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
        background-color: ${theme.offWhite};
        color: ${theme.black};
        font-size: 10px;
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
        margin-bottom: 3rem;
    }
    p{
        font-size: 1.2rem;
        font-variation-settings: "wght" 300;
        line-height: 1.5;
    }
`;

const Container = styled.div`
    width: 85%;
    margin: 0 auto;

    @media (min-width: 769px) {
        width: 80%;
        max-width: 1020px;
    }
`;

const Row = styled.div`
    margin-bottom: 8rem;
    hr {
        width: 6rem;
        height: 0.1rem;
        background-color: black;
        border: none;
        margin: 4rem 0;
    }
`;

const Headline = styled.div`
    margin-top: 10rem;
    margin-bottom: 12rem;
`;

const SplitSection = styled.div`
    @media (min-width: 436px) {
        h3 {
            width: 50%;
        }
    }

    @media (min-width: 769px) {
        display: flex;
        flex-flow: column wrap;
        align-content: space-between;
        max-height: 50rem;
        div {
            width: 50%;
        }
        h3 {
            width: 30%;
        }
        p {
            width: 45%;
        }
    }
`;

const BoldBox = styled.div`
    margin: 0 auto;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    max-width: 510px;

    h1 {
        @media (max-width: 375px) {
            font-size: 2rem;
        }
        color: ${theme.offWhite};
        background-color: ${theme.black};
        padding: 1rem;
        letter-spacing: 0.5rem;
        font-variation-settings: "wght" 800;
    }
    h3 {
        padding: 1rem 1rem;
        border: 0.1rem solid ${theme.black};
        font-size: 0.8rem;
        letter-spacing: -0.1rem;
        word-spacing: 0.1rem;
        font-variation-settings: "wght" 800;
    }
`;

const BoldButton = styled.div`
    margin: 0 auto;
    margin-bottom: 4rem;
    button {
        background-color: ${theme.offWhite};
        color: ${theme.black};
        background: linear-gradient(
            to right,
            ${theme.black},
            ${theme.black} 50%,
            ${theme.offWhite} 50%
        );
        background-size: 300% 100%;
        background-position: right;
        cursor: pointer;
        padding: 1rem;
        border: 0.05rem solid ${theme.black};
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: -0.1rem;
        word-spacing: 0.1rem;
        font-variation-settings: "wght" 800;
        transition: all 0.2s;
        -webkit-appearance: none;
        appearance: none;

        &:hover {
            background-color: ${theme.black};
            background-position: left;
            color: ${theme.offWhite};
        }
    }
`;

const ImageSection = styled.div`
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    div {
        @media (min-width: 769px) {
            position: absolute;
            left: 3rem;
            bottom: -3rem;
        }
        padding: 1rem;
        background: ${theme.black};
        color: ${theme.offWhite};

        h3 {
            margin: 0;
        }
    }
`;

const Footer = styled.div`
    border-top: 0.05rem solid ${theme.black};
    padding: 2rem;
`;

const Index = () => (
    <Container>
        <GlobalStyle />
        <Row>
            <Headline>
                <h1>jstntrnr.com</h1>
                <h3>
                    A website that exists purely to make me look more
                    professional. I'm a software developer, btw.
                </h3>
            </Headline>
        </Row>
        <Row>
            <hr />
            <SplitSection>
                <h2>BBQ Sauce</h2>
                <h3>
                    A bunch of text that is supposed to describe something but I
                    don't care what it is right now aylmao
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus nec ipsum quis quam iaculis blandit. Praesent
                    sagittis consequat quam nec sollicitudin. Etiam fermentum
                    varius velit, vel tincidunt tellus ultrices nec. Aliquam
                    fringilla sollicitudin nunc, vel laoreet erat finibus nec.
                    Ut tempus nibh at velit mollis hendrerit. Vivamus
                    scelerisque, orci vitae venenatis vulputate, nisl ex mattis
                    ex, id tempus libero ex sed massa. Phasellus eget mi ut
                    augue sollicitudin dapibus non vel nisi. Etiam sodales
                    feugiat molestie. Vivamus egestas turpis in mi consectetur
                    pulvinar.
                </p>
                <p>
                    Etiam vitae mauris vitae lorem rutrum aliquet. Etiam sapien
                    tellus, fermentum ac consequat ut, ultricies sit amet
                    ligula. Quisque dictum, sapien sit amet tincidunt congue,
                    enim purus sodales ex, mollis accumsan massa dui a leo.
                    Donec urna ipsum, euismod eu dapibus sit amet, mattis in
                    sem. Sed metus nunc, sagittis vel diam non, tincidunt
                    elementum nisi. Pellentesque nunc diam, tempus eget erat
                    non, maximus vulputate arcu. Pellentesque augue neque,
                    aliquet sollicitudin arcu et, ullamcorper ornare sem.
                    Praesent sed porta dolor. Quisque sed blandit diam. Donec
                    vestibulum volutpat faucibus. Nunc porta lectus ac iaculis
                    vestibulum. Duis pulvinar dignissim pretium. Quisque laoreet
                    ullamcorper risus quis finibus. Donec fermentum purus sit
                    amet consequat suscipit. Quisque dictum dictum mauris, nec
                    bibendum velit consectetur et.
                </p>
            </SplitSection>
        </Row>
        <Row>
            <BoldBox>
                <h1>Software</h1>
                <h3>I make that stuff</h3>
            </BoldBox>
        </Row>
        <Row>
            <ImageSection>
                <img src="/static/spvcepvndv.png" alt="" />
                <div>
                    <h2>Graphics</h2>
                    <h3>Sometimes I play around in Photoshop</h3>
                </div>
            </ImageSection>
        </Row>
        <Row>
            <hr />
            <SplitSection>
                <h2>Chicken Nuggets</h2>
                <h3>
                    A bunch of text that is supposed to describe something but I
                    don't care what it is right now aylmao
                </h3>
                <BoldButton>
                    <button>Button Text</button>
                </BoldButton>
                <p>
                    Etiam vitae mauris vitae lorem rutrum aliquet. Etiam sapien
                    tellus, fermentum ac consequat ut, ultricies sit amet
                    ligula. Quisque dictum, sapien sit amet tincidunt congue,
                    enim purus sodales ex, mollis accumsan massa dui a leo.
                    Donec urna ipsum, euismod eu dapibus sit amet, mattis in
                    sem. Sed metus nunc, sagittis vel diam non, tincidunt
                    elementum nisi. Pellentesque nunc diam, tempus eget erat
                    non, maximus vulputate arcu. Pellentesque augue neque,
                    aliquet sollicitudin arcu et, ullamcorper ornare sem.
                    Praesent sed porta dolor. Quisque sed blandit diam. Donec
                    vestibulum volutpat faucibus. Nunc porta lectus ac iaculis
                    vestibulum. Duis pulvinar dignissim pretium. Quisque laoreet
                    ullamcorper risus quis finibus. Donec fermentum purus sit
                    amet consequat suscipit. Quisque dictum dictum mauris, nec
                    bibendum velit consectetur et.
                </p>
            </SplitSection>
        </Row>
        <Footer>Footer Text</Footer>
    </Container>
);

export default Index;

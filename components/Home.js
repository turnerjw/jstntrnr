import styled, { keyframes, css } from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";
import BigImageAnim from "./BigImageAnim";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import GridRow from "./GridRow";
import BoldBox from "./BoldBox";
import Blob from "./Blob";
import Divider from "./Divider";
import EntryAnimation from "./EntryAnimation";
import ScrollIndicator from "./ScrollIndicator";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Skill from "./Skill";
import { fadeInRight, fadeInUp } from "./animations";

const Home = () => (
    <GridContainer columns="repeat(12, 1fr)" rows="100vh auto">
        <GridRow rows="1">
            <GridItem columns="2 / 8" alignSelf="center">
                <EntryAnimation animation={fadeInRight} startOpacity={0}>
                    <h1>jstntrnr.com</h1>
                    <h3>
                        I'm Justin, a software developer in Toronto.
                        <br />
                        Welcome to my website.
                    </h3>
                </EntryAnimation>
            </GridItem>
            <GridItem columns="9 / -1" alignSelf="center">
                <Parallax
                    offsetYMax={100}
                    offsetYMin={-100}
                    slowerScrollRate={true}
                >
                    <EntryAnimation
                        animation={fadeInUp}
                        delay="0.2s"
                        startOpacity={0}
                    >
                        <Blob />
                    </EntryAnimation>
                </Parallax>
            </GridItem>
            <GridItem alignSelf="end" justifySelf="center">
                <Parallax offsetYMax={150} offsetYMin={-1000}>
                    <ScrollIndicator />
                </Parallax>
            </GridItem>
        </GridRow>
        <GridRow rows="10">
            <GridItem columns="2" smallColumns="2 / 4" rows="10">
                <Divider />
            </GridItem>
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="11">
                <h2>About me</h2>
            </GridItem>
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="12">
                <h3>
                    Software Developer / Music Lover / Gamer / Consumer of BBQ
                    Foods
                </h3>
            </GridItem>
            <GridItem columns="2 / 7" smallColumns="2 / 12" rows="13">
                <p>
                    I come from a family of engineers and grew up with the
                    internet - it shouldn't be a surprise to anybody that I
                    gravitated towards math and science and chose a career
                    working with computers. I like being creative and I like
                    problem solving, so I think software development is a
                    perfect fit for me.
                    <br />
                    <br />
                    In 2016, I graduated from Western University with a degree
                    in Software Engineering, and I currently work at SPS
                    Commerce. Most of my projects now are web apps, but I have
                    experience working on a variety of cool things, ranging from
                    embedded systems to machine learning and computer vision
                    (thanks Western!).
                    <br />
                    <br />
                </p>
            </GridItem>
            <GridItem
                columns="7 / 12"
                smallColumns="2 / 12"
                rows="13"
                smallRows="14"
            >
                <p>
                    But enough of that nerd stuff - I also have a passion for
                    music and graphic design. I have been playing bass for over
                    10 years, and have even had the opportunity to perform at
                    Roy Thompson Hall and the 2012 London Olympics with my high
                    school symphonic band. As for graphic design, I have taught
                    myself tools like Photoshop and Illustrator through
                    experimentation (in other words, I'm not an expert), and I
                    like to create things when I feel inspired. Some examples of
                    my work can be seen on this page.
                </p>
            </GridItem>
            <GridItem columns="2" smallColumns="2 / 4" rows="15">
                <Divider />
            </GridItem>
        </GridRow>
        <GridRow rows="20">
            <GridItem columns="3 / -1" smallColumns="1 / -1" alignSelf="center">
                <BigImageAnim src="/static/spvcepvndv.png" />
            </GridItem>
            <GridItem
                columns="2 / 5"
                smallColumns="2 / 12"
                alignSelf="center"
                smallAlignSelf="end"
                zIndex="10"
            >
                <Parallax
                    disabled={isMobile}
                    offsetYMax={100}
                    offsetYMin={-100}
                >
                    <BoldBox>
                        <h2>Red Pandas</h2>
                        <h3>They're pretty neat</h3>
                    </BoldBox>
                </Parallax>
            </GridItem>
        </GridRow>
        <GridRow rows="30">
            <GridItem columns="2" smallColumns="2 / 4" rows="30">
                <Divider />
            </GridItem>
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="31">
                <h2>My Skills</h2>
            </GridItem>
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="32">
                <h3>
                    I've always like solving problems, so I guess software
                    development is a perfect fit.
                </h3>
            </GridItem>
            <GridItem columns="4 / 10" smallColumns="2 / 12" rows="33">
                <Skill>
                    <h2>Web Tech</h2>
                    <h3>
                        HTML / Javascript
                        <br />
                        CSS / Sass / Less
                        <br />
                        React / Next.js / Angular / Node.js / .NET
                        <br />
                        REST / GraphQL
                    </h3>
                </Skill>
            </GridItem>

            <GridItem columns="4 / 10" smallColumns="2 / 12" rows="34">
                <Skill>
                    <h2>Database</h2>
                    <h3>
                        SQL / NoSQL
                        <br />
                        SQL Server / Prisma.io
                    </h3>
                </Skill>
            </GridItem>

            <GridItem columns="4 / 10" smallColumns="2 / 12" rows="35">
                <Skill>
                    <h2>CI/CD</h2>
                    <h3>
                        Git / JIRA
                        <br />
                        Azure Devops / Now
                    </h3>
                </Skill>
            </GridItem>

            {/* <GridItem
                columns="2 / 6"
                smallColumns="2 / 12"
                rows="35"
                smallRows="36"
                alignSelf="center"
                justifySelf="end"
            >
                <p>It's nice when things run smoothly.</p>
            </GridItem> */}
            <GridItem columns="2" smallColumns="2 / 4" rows="39">
                <Divider />
            </GridItem>
        </GridRow>
        <GridRow rows="40">
            <GridItem>
                <BigImageAnim src="/static/spvce.png" />
            </GridItem>
            <GridItem
                columns="9 / 12"
                smallColumns="2 / 12"
                alignSelf="end"
                zIndex="10"
            >
                <Parallax disabled={isMobile} offsetYMax={40} offsetYMin={-40}>
                    <BoldBox>
                        <h2>Pixels</h2>
                        <h3>
                            I really enjoy the aesthetic of retro video games
                        </h3>
                    </BoldBox>
                </Parallax>
            </GridItem>
        </GridRow>
        <GridRow rows="50">
            <GridItem columns="2" smallColumns="2 / 4" rows="50">
                <Divider />
            </GridItem>
            <GridItem columns="4 / 7" smallColumns="2 / 12" rows="51">
                <h2>Contact</h2>
            </GridItem>
            <GridItem columns="4 / 7" smallColumns="2 / 12" rows="52">
                <h3>Say hi!</h3>
            </GridItem>
            <GridItem columns="4 / -4" smallColumns="2 / 12" rows="53">
                <ContactForm />
            </GridItem>
        </GridRow>
        <GridRow rows="100">
            <GridItem columns="2 / 12">
                <Footer />
            </GridItem>
        </GridRow>
    </GridContainer>
);

export default Home;

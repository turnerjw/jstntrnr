import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridItem from "./GridItem";

const Close = styled.div`
    z-index: 100;
    margin: 1rem;
    color: ${({ theme }) => theme.bg};
    width: 1.5rem;
    cursor: pointer;
`;

const Burger = styled.div`
    z-index: 100;
    position: fixed;
    transform: ${({ open }) =>
        open ? "rotate(90deg) scale(0)" : "rotate(0) scale(1)"};
    opacity: ${({ open }) => (open ? 0 : 1)};
    padding: 1rem;
    color: ${({ theme }) => theme.fg};
    width: 1.5rem;
    cursor: pointer;
    transition: all 0.2s;
`;

const NavItem = styled.div`
    margin: 2rem 0;
    h1 {
        user-select: none;
        cursor: pointer;
    }
`;

const NavBox = styled.div`
    ${NavItem}, ${Close} {
        opacity: ${({ open }) => (open ? "1" : "0")};
        transform: ${({ open }) =>
            open ? "translateY(0)" : "translateY(1rem)"};
        transition: opacity 0.4s 0.4s, transform 0.4s 0.4s;
    }

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    z-index: ${({ open }) => (open ? "101" : "100")};
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
    transform-origin: left;
    transition: transform 0.4s ease, z-index 0s 0.4s;
    ::before {
        content: "";
        grid-column: 2 / -1;
        grid-row: 1;
        height: 100%;
        transform: ${({ open }) => (open ? "scaleX(0.05)" : "scaleX(1)")};
        transform-origin: right;
        background: linear-gradient(
            to top,
            ${({ theme }) => theme.red},
            ${({ theme }) => theme.yellow}
        );
        transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
`;

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleOpenMenu = () => {
        this.setState({ open: true });
    };

    handleCloseMenu = () => {
        this.setState({ open: false });
    };

    render() {
        const { children } = this.props;
        const { open } = this.state;
        return (
            <div>
                <NavBox open={open}>
                    <Close onClick={this.handleCloseMenu}>
                        <FontAwesomeIcon icon="times" />
                    </Close>
                    <GridItem columns="4 / -1" rows="1" alignSelf="center">
                        <NavItem>
                            <h1>Home</h1>
                        </NavItem>
                        <NavItem>
                            <h1>About</h1>
                        </NavItem>
                        <NavItem>
                            <h1>Projects</h1>
                        </NavItem>
                        <NavItem>
                            <h1>Contact</h1>
                        </NavItem>
                    </GridItem>
                </NavBox>
                <Burger open={open} onClick={this.handleOpenMenu}>
                    <FontAwesomeIcon icon="bars" />
                </Burger>

                {children}
            </div>
        );
    }
}

export default NavMenu;

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
    position: relative;
    ::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0.2rem;
        z-index: -1;
        width: 100%;
        height: 1rem;
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.red},
            ${({ theme }) => theme.yellow}
        );
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
    }
    &:hover {
        ::before {
            transform: scaleX(1);
        }
    }

    a {
        z-index: 102;
        text-decoration: none;
        color: ${({ theme }) => theme.bg};
    }

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
                    <GridItem columns="4" rows="1" alignSelf="center">
                        <NavItem onClick={this.handleCloseMenu}>
                            <Link href="/">
                                <a>
                                    <h1>Home</h1>
                                </a>
                            </Link>
                        </NavItem>
                        <NavItem onClick={this.handleCloseMenu}>
                            <Link href="/contact">
                                <a>
                                    <h1>Contact</h1>
                                </a>
                            </Link>
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

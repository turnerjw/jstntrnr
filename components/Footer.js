import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.75rem;
    margin: 1rem;
    background: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.08, 0.82, 0.17, 1);

    &:hover {
        transform: scale(1.2);
    }
`;

const StyledFooter = styled.div`
    margin-top: 5rem;
    border-top: 2px solid ${({ theme }) => theme.fg};
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => (
    <StyledFooter>
        <a href="https://github.com/turnerjw">
            <Icon>
                <FontAwesomeIcon icon={["fab", "github"]} />
            </Icon>
        </a>
        <a href="https://www.linkedin.com/in/justin-turner/">
            <Icon>
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Icon>
        </a>
    </StyledFooter>
);

export default Footer;

import styled, { keyframes } from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const growRight = keyframes`
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
`;

const StyledDivider = styled.div`
    margin: 4rem 0;
    padding: 1rem 0;
    div {
        height: 2px;
        background: ${({ theme }) => theme.fg};
        width: 100%;
        transform: scaleX(0);
        transform-origin: left;
        animation: ${({ isVisible }) => (isVisible ? growRight : "")}
            cubic-bezier(1, 0, 0, 1) 0.4s forwards;
        animation-delay: 0.2s;
    }
`;

const Divider = () => (
    <VisibilitySensor partialVisibility={true}>
        {({ isVisible }) => (
            <StyledDivider isVisible={isVisible}>
                <div />
            </StyledDivider>
        )}
    </VisibilitySensor>
);

export default Divider;

import styled, { keyframes } from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const zoom = keyframes`
    from {
        transform: translate3d(0, 0, 10rem);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
`;

const wipe = keyframes`
    from {
        clip-path: polygon(0 0, 0 0, 20% 100%, 0% 100%);
    }
    to {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`;

const BigImage = styled.div`
    grid-column: 1 / -1;
    grid-row: 1;
    z-index: 1;
    perspective: 50rem;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 20% 100%, 0% 100%);
    animation: ${props => (props.isVisible ? wipe : "")} 1s forwards ease;
    img {
        width: 100%;
        animation: ${props => (props.isVisible ? zoom : "")} 1s forwards ease;
    }

    @media (min-width: 1000px) {
        grid-column: ${props => props.columnStart || 1} /
            ${props => props.columnEnd || -1};
        grid-row: 1;
    }
`;

const BigImageAnim = ({ src, alt, columnStart, columnEnd }) => (
    <VisibilitySensor partialVisibility={true}>
        {({ isVisible }) => (
            <BigImage
                isVisible={isVisible}
                columnStart={columnStart}
                columnEnd={columnEnd}
            >
                <img src={src} alt={alt} />
            </BigImage>
        )}
    </VisibilitySensor>
);

export default BigImageAnim;

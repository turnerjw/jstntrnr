import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const BigImage = styled.div`
    perspective: 50rem;
    overflow: hidden;
    clip-path: ${({ isVisible }) =>
        isVisible
            ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0 0, 0 0, 20% 100%, 0% 100%)"};
    transition: clip-path 1.2s cubic-bezier(0.23, 1, 0.32, 1);

    img {
        width: 100%;
        min-height: 25rem;
        object-fit: cover;
        transform: ${({ isVisible }) =>
            isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 0, 10rem)"};
        transition: transform 1s ease-out;
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

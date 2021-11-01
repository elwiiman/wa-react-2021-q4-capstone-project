import styled, { keyframes, css } from 'styled-components';
import { device } from '../../config/breakpoints';
const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    transform: 1;
  }
`;

interface Intro {
    intro: boolean;
}

interface Selected {
    selected: boolean;
}

export const GalleryContainer = styled.div``;

export const GalleryPhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GalleryPhoto = styled.img<Intro>`
    border-radius: 5px;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.25);
    max-width: 100%;
    max-height: 400px;
    animation: ${(props) => (props.intro ? css`0.8s ease-out 0s ${fade}` : '')};

    @media ${device.tablet} {
        max-height: 100%;
    }
`;

export const PhotoCarrousel = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    overflow: scroll;
    display: flex;
    height: 4.5em;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
`;

export const SmallPhoto = styled.img<Selected>`
    transition: all 0.5s;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.25);

    :not(:last-child) {
        margin-right: 0.625rem;
    }

    opacity: ${(props) => (props.selected ? 1 : 0.5)};
`;

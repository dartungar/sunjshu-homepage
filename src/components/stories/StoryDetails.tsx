import React from "react";
import styled, { keyframes } from "styled-components";
import { storyData } from "../../stories_data/storiesData";

const DarkenedBackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const fadein = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const StoryPage = styled.div`
  position: relative;
  z-index: 400;
  background-color: white;
  padding: 0 2rem 2rem;
  overflow-y: scroll;
  animation: ${fadein} 0.1s linear;
`;

const TitleContainer = styled.div`
  position: sticky;
  top: 0;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: white;

  h3 {
    display: inline-block;
    margin: 0;
    align-self: center;
  }

  span {
    display: inline-block;
    font-weight: 600;
    font-size: 125%;
    cursor: pointer;
    :hover {
      color: #d1b933;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
  }
  margin: 1rem 0;
`;

interface Props {
  story: storyData;
  setShowStory: (val: boolean) => void;
}

export const StoryDetails = (props: Props) => {
  const {
    story: { title, description, images },
    setShowStory,
  } = props;

  const stopPropagatingClickOnStoryPage = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
  };

  return (
    <DarkenedBackgroundOverlay onClick={() => setShowStory(false)}>
      <StoryPage onClick={(e) => stopPropagatingClickOnStoryPage(e)}>
        <TitleContainer>
          <h3>{title}</h3>
          <span onClick={() => setShowStory(false)}>X</span>
        </TitleContainer>

        <p>{description}</p>
        {images &&
          images.map((i: any, index) => (
            <ImageContainer>
              <img src={i.path} alt={i.title} key={index} />
            </ImageContainer>
          ))}
      </StoryPage>
    </DarkenedBackgroundOverlay>
  );
};

import React, { useState } from "react";
import styled from "styled-components";
import { StoryDetails } from "./StoryDetails";
import { storyData } from "../../stories_data/storiesData";

const StoryThumbnailContainer = styled.div`
  position: relative;
  margin-top: 0.3rem;
  width: 300px;
  overflow: hidden;
  img {
    max-width: 100%;
    transition: transform 0.2s ease-in-out, filter 0.2s linear;
  }

  div.info-container {
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  :hover {
    img {
      transform: scale(1.2);
      filter: brightness(0.5);
      transition: transform 0.2s ease-in-out, filter 0.2s linear;
    }

    div.info-container {
      opacity: 1;
      transition: opacity 0.2s linear;
    }
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
`;

interface Props {
  story: storyData;
}

export const Story = (props: Props) => {
  const [showStory, setShowStory] = useState<boolean>(false);

  const {
    story: { title, description, thumbnailImagePath },
  } = props;

  const handleClick = (): void => {
    setShowStory(true);
  };

  return (
    <>
      <StoryThumbnailContainer onClick={handleClick}>
        <img src={thumbnailImagePath} alt={title} />
        <InfoContainer className="info-container">
          <h4>{title}</h4>
          <p>{description}</p>
        </InfoContainer>
      </StoryThumbnailContainer>
      {showStory && (
        <StoryDetails story={props.story} setShowStory={setShowStory} />
      )}
    </>
  );
};

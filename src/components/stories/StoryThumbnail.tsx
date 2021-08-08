import React from "react";
import styled from "styled-components";
import { storyData, storiesData } from "../../stories_data/storiesData";
import { Link } from "react-router-dom";

const StoryThumbnailContainer = styled.div`
  position: relative;
  margin-top: 0.65rem;
  width: 300px;
  overflow: hidden;
  cursor: pointer;
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
  storyId: number;
}

export const StoryThumbnail = (props: Props) => {
  // get story title & description
  const story: storyData = storiesData.filter((s) => s.id === props.storyId)[0];

  return (
    <Link to={`/stories/${props.storyId}`}>
      <StoryThumbnailContainer>
        <img src={story.thumbnailImagePath} alt={story.title} />
        <InfoContainer className="info-container">
          <h4>{story.title}</h4>
          <p>{story.description}</p>
        </InfoContainer>
      </StoryThumbnailContainer>
    </Link>
  );
};

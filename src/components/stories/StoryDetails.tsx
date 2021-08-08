import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { storyData, storiesData } from "../../stories_data/storiesData";
import { fadein } from "../../style/animations";

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

const StoryPage = styled.div`
  position: relative;
  z-index: 400;
  max-width: 30rem;
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

  /* pseudo-link */
  span {
    display: inline-block;
    font-weight: 600;
    font-size: 125%;
    cursor: pointer;
    :hover {
      color: #99957d;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
  }
  margin: 1rem 0;
`;

export const StoryDetails = () => {
  const history = useHistory();
  let { id } = useParams<{ id: string | undefined }>();
  let storyId: number = parseInt(id as string);
  let story: storyData = storiesData.filter((s) => s.id === storyId)[0];

  const stopPropagatingClickOnStoryPage = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
  };

  const goBack = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <>
      {story && (
        <DarkenedBackgroundOverlay onClick={goBack}>
          <StoryPage onClick={(e) => stopPropagatingClickOnStoryPage(e)}>
            <TitleContainer>
              <h3>{story.title}</h3>
              <span onClick={goBack}>X</span>
            </TitleContainer>

            <p>{story.description}</p>
            {story.images &&
              story.images.map((i: any, index) => (
                <ImageContainer>
                  <img src={i.path} alt={i.title} key={index} />
                </ImageContainer>
              ))}
          </StoryPage>
        </DarkenedBackgroundOverlay>
      )}
    </>
  );
};

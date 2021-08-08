import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoryThumbnail } from "../stories/StoryThumbnail";
import { storiesData } from "../../stories_data/storiesData";
import { StoryDetails } from "../stories/StoryDetails";

const PortfolioContainer = styled.div``;

const StoriesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 8rem;
`;
const StoriesContainer: React.FC = () => {
  return (
    <section>
      <PortfolioContainer id="photo">
        <h2>Новые истории</h2>
        <StoriesGrid>
          {storiesData &&
            storiesData.map((story) => (
              <StoryThumbnail storyId={story.id} key={story.id} />
            ))}
        </StoriesGrid>
      </PortfolioContainer>
    </section>
  );
};

const Portfolio: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" children={<StoriesContainer />} />
      <Route path="/stories/:id" children={<StoryDetails />} />
    </Router>
  );
};

export default Portfolio;

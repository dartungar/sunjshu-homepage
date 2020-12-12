import React from "react";
import styled from "styled-components";
import { Story } from "../stories/Story";
import { storiesData } from "../../stories_data/storiesData";

const PortfolioContainer = styled.div``;

const StoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 8rem;
`;

export const Portfolio: React.FC = () => {
  return (
    <section>
      <PortfolioContainer id="photo">
        <h2>Новые истории</h2>
        <StoriesContainer>
          {storiesData &&
            storiesData.map((story, index) => (
              <Story story={story} key={index} />
            ))}
        </StoriesContainer>
      </PortfolioContainer>
    </section>
  );
};

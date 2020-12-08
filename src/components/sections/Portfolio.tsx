import React, { ReactNode } from "react";
import styled from "styled-components";
import { Story } from "../stories/Story";
import { storiesData } from "../../stories_data/storiesData";

const PortfolioContainer = styled.section``;

const StoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <h2>Новые истории</h2>
      <StoriesContainer>
        {storiesData &&
          storiesData.map((story, index) => (
            <Story story={story} key={index} />
          ))}
      </StoriesContainer>
    </PortfolioContainer>
  );
};

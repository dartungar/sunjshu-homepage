import React from "react";
import styled from "styled-components";

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  a {
    margin-right: 1.5rem;
    font-size: 1.3rem;
    color: #1f1f1f;
  }
  a :hover {
    color: #99957d;
  }
`;

export const SocialLinks: React.FC = () => {
  return (
    <SocialLinksContainer>
      <a
        href="https://www.instagram.com/sunjshu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://t.me/sunjshu" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-telegram-plane"></i>
      </a>
      <a
        href="https://vk.com/sunjshu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-vk"></i>
      </a>
    </SocialLinksContainer>
  );
};

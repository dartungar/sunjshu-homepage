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
      <a href="tel:+79169674807" title="Позвонить">
        <i className="fas fa-phone"></i>
      </a>
      <a
        href="https://www.instagram.com/sunjshu"
        target="_blank"
        rel="noopener noreferrer"
        title="Посмотреть или написать в Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://t.me/sunjshu"
        target="_blank"
        rel="noopener noreferrer"
        title="Написать в Telegram"
      >
        <i className="fab fa-telegram-plane"></i>
      </a>
      <a
        href="https://vk.com/sunjshu"
        target="_blank"
        rel="noopener noreferrer"
        title="Написать Вконтакте"
      >
        <i className="fab fa-vk"></i>
      </a>
    </SocialLinksContainer>
  );
};

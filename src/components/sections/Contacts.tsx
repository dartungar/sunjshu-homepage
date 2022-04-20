import React from "react";
import styled from "styled-components";
import { SocialLinks } from "../elements/SocialLinks";

const ContactsContainer = styled.div`
  div {
    margin-left: 0.6rem;
  }
`;

export const Contacts: React.FC = () => {
  return (
    <section>
      <ContactsContainer id="contacts">
        <h2>Контакты</h2>
        <p>Свяжитесь со мной по телефону, в соцсетях или telegram:</p>
        <SocialLinks />
      </ContactsContainer>
    </section>
  );
};

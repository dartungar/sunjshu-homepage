import React from 'react';
import styled from "styled-components";

const AboutContainer = styled.section`
`;

export const About: React.FC = () => {
    return (
        <AboutContainer>
            <h2>Привет, я - Юля.</h2>
            <p>Я расскажу вашу историю фотографиями.</p>
            <p>Сохраните в памяти вашу свадьбу, памятный момент или простую прогулку. Пересматривайте фотографии и переживайте чувства снова и снова.</p>
        </AboutContainer>
    )
}

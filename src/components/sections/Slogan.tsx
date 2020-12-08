import React from 'react';
import styled from "styled-components";

const SloganSection = styled.section`
text-align: center;
font-size: 1.25rem;
`;

export const Slogan: React.FC = () => {
    return (
        <SloganSection>
            <p>Фотографии, которые сохранят ваши лучшие моменты навсегда</p>
        </SloganSection>
    )
}

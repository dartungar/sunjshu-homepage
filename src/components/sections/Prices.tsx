import React from "react";
import styled from "styled-components";

const PricesContainer = styled.div`
  width: 100%;
`;

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  table {
    min-width: 60%;
    border-collapse: collapse;
    margin-bottom: 2rem;
    tr {
      border-bottom: 1px solid rgb(232, 230, 225);
    }
    tr:last-child {
      border-bottom: none;
    }
    td {
      padding: 1rem 0;
    }

    td:nth-child(2) {
      text-align: right;
    }
    @media (max-width: 800px) {
      td:nth-child(1) {
        width: 60%;
      }
    }
  }
`;

export const Prices: React.FC = () => {
  return (
    <section>
      <PricesContainer id="prices">
        <h2>Цены</h2>
        <TableContainer>
          <table>
            <tr>
              <td>
                <strong>Свадебная съемка</strong>
                <ul>
                  <li>Консультация для подбора локации</li>
                  <li>Консультация по созданию образа (по желанию)</li>
                  <li>ЗАГС + прогулка (3 часа)</li>
                  <li>80+ фотографий в авторской обработке</li>
                </ul>
              </td>
              <td>11 000 ₽</td>
            </tr>
            <tr>
              <td>
                <strong>Индивидуальная съемка</strong>
                <ul>
                  <li>Консультация для подбора локации</li>
                  <li>Консультация по образу и реквизиту (1-2 образа)</li>
                  <li>2 часа</li>
                  <li>50+ фотографий в авторской обработке</li>
                </ul>
              </td>
              <td>7 000 ₽</td>
            </tr>
            <tr>
              <td>
                <strong>Love story - съемка</strong>
                <ul>
                  <li>Консультация для подбора локации</li>
                  <li>Консультация по образу и реквизиту (1-2 образа)</li>
                  <li>2 часа</li>
                  <li>50+ фотографий в авторской обработке</li>
                </ul>
              </td>
              <td>8 000 ₽</td>
            </tr>
            <tr>
              <td>
                <strong>Экспресс-съемка</strong>
                <ul>
                  <li>Консультация для подбора локации</li>
                  <li>Консультация по образу и реквизиту (1-2 образа)</li>
                  <li>1 час</li>
                  <li>25+ фотографий в авторской обработке</li>
                </ul>
              </td>
              <td>4000 ₽</td>
            </tr>
            <tr>
              <td>
                <p>Любую съемку можно продлить: 3500 ₽ / ч.</p>
                <p>
                  Для любой съемки можно заказать ретушь дополнительных
                  фотографий.
                </p>
                <p>
                  Отдам обработанные фото в течении 3-4 недель после съемки.
                </p>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Создание образа</td>
              <td>2500 ₽ / ч</td>
            </tr>
            <tr>
              <td>Работа с гардеробом</td>
              <td>2500 ₽ / ч</td>
            </tr>
            <tr>
              <td>Шопинг-сопровождение</td>
              <td>2500 ₽ / ч</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                Визуальное оформление вашего Instagram (12 постов с вашим
                контентом)
              </td>
              <td>4000 ₽</td>
            </tr>
            <tr>
              <td>Съемка контента (1 час, без обработки) </td>
              <td>3000 ₽</td>
            </tr>
            <tr>
              <td>Съемка контента (1 час, 30 фотографий с обработкой) </td>
              <td>4000 ₽</td>
            </tr>
          </table>
        </TableContainer>
      </PricesContainer>
    </section>
  );
};

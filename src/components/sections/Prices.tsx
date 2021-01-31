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
              <td>Экспресс-съемка (1 час, 30 фотографий)</td>
              <td>3000 ₽</td>
            </tr>
            <tr>
              <td>Фотопрогулка (2 часа, 50 фотографий)</td>
              <td>5000 ₽</td>
            </tr>
            <tr>
              <td>Lovestory (2 часа, 50 фотографий)</td>
              <td>5000 ₽</td>
            </tr>
            <tr>
              <td>Семейная (2 часа, 50 фотографий)</td>
              <td>6000 ₽</td>
            </tr>
            <tr>
              <td>Свадьба (прогулка; до 2 часов, 60 фотографий)</td>
              <td>6000 ₽</td>
            </tr>
            <tr>
              <td>Свадьба (ЗАГС + прогулка; до 3 часов, 80 фотографий)</td>
              <td>8000 ₽</td>
            </tr>
            <tr>
              <td>
                <i>* любую фотосъемку можно продлить: 2500 ₽ / ч</i>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Создание образа</td>
              <td>1800 ₽ / ч</td>
            </tr>
            <tr>
              <td>Работа с гардеробом</td>
              <td>1800 ₽ / ч</td>
            </tr>
            <tr>
              <td>Шопинг-сопровождение</td>
              <td>1800 ₽ / ч</td>
            </tr>
          </table>
        </TableContainer>
      </PricesContainer>
    </section>
  );
};

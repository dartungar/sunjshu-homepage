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
                <strong>Свадьба - стандарт</strong>
                <ul>
                  <li>Консультация для подбора локации</li>
                  <li>Консультация по созданию образа (по желанию)</li>
                  <li>ЗАГС + прогулка (~3 часа)</li>
                  <li>150+ фотографий в авторской обработке</li>
                </ul>
              </td>
              <td>20 000 ₽</td>
            </tr>
            <tr>
              <td>
                <strong>Свадьба - всё включено</strong>
                <ul>
                  <li>Всё, что включено в стандарт</li>
                  <li>Репетиция макияжа и укладки</li>
                  <li>Макияж и укладка на съемку</li>
                </ul>
              </td>
              <td>30 000 ₽</td>
            </tr>
            <tr>
              <td>
                <strong>Индивидуальная, Lovestory, семейная - стандарт</strong>
                <ul>
                  <li>Консультация для подбора локации</li>
                  <li>Консультация по образу и реквизиту (1-2 образа)</li>
                  <li>~2 часа</li>
                  <li>80+ фотографий в авторской обработке</li>
                </ul>
              </td>
              <td>10 000 ₽</td>
            </tr>
            <tr>
              <td>
                <strong>Индивидуальная, Lovestory, семейная - всё включено</strong>
                <ul>
                  <li>Всё, что включено в стандарт + макияж и укладка для съемки</li>
                </ul>
              </td>
              <td>15 000 ₽</td>
            </tr>
            <tr>
              <td>
                <strong>Экспресс</strong>
                <ul>
                  <li>Консультация для подбора локации</li>
                  <li>Консультация по образу и реквизиту (1-2 образа)</li>
                  <li>~1 час</li>
                  <li>40+ фотографий в авторской обработке</li>
                </ul>
              </td>
              <td>5000 ₽</td>
            </tr>
            <tr>
              <td>
                <p>
                  Превью сделаю в течение 2 дней, обработанные фото - в течении 3-6 недель после съемки.
                </p>
                <p>Любую съемку можно продлить: 4500 ₽ / ч.</p>
                <p>
                  Для любой съемки можно заказать ретушь дополнительных
                  фотографий.
                </p>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Создание образа</td>
              <td>3500 ₽ / ч</td>
            </tr>
            <tr>
              <td>Работа с гардеробом</td>
              <td>3500 ₽ / ч</td>
            </tr>
            <tr>
              <td>Шопинг-сопровождение</td>
              <td>3500 ₽ / ч</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                Визуальное оформление вашего Instagram (12 постов с вашим
                контентом)
              </td>
              <td>6000 ₽</td>
            </tr>
            <tr>
              <td>Съемка контента</td>
              <td>от 10000 ₽</td>
            </tr>
          </table>
        </TableContainer>
      </PricesContainer>
    </section>
  );
};

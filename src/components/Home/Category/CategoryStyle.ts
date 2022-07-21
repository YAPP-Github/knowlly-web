import styled, { css } from 'styled-components';

export const CategoryContainer = styled.section`
  margin-top: 2.4rem;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  width: calc(100vw - 4.8rem);
`;

export const CategoryItem = styled.li`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      width: calc(100% / 3 - 1.2rem);

      & > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 8.4rem;
        border-radius: 1rem;
        background-color: ${color.gray['F7']};

        & > svg {
          margin-bottom: 0.4rem;
        }
      }

      @media only screen and (max-width: 359px) {
        width: calc(50% - 1.2rem);

        & > a {
          width: 100%;
          max-width: 15rem;
        }
      }
    `;
  }}
`;

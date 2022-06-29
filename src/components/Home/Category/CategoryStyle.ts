import styled, { css } from 'styled-components';

export const CategoryContainer = styled.section`
  margin-top: 2.4rem;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  width: 100%;
`;

export const CategoryItem = styled.li`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      & > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 9.6rem;
        height: 8.4rem;
        border-radius: 1rem;
        background-color: ${color.gray['F7']};

        & > svg {
          margin-bottom: 0.4rem;
        }
      }
    `;
  }}
`;

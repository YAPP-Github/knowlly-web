import styled, { css } from 'styled-components';
import theme from '@styles/theme';

export const FeatureContainer = styled.section`
  height: 95.6rem;
  background-color: ${theme.color.gray['F7']};
`;

export const MenuContainer = styled.div<{ selectedMenu: number }>`
  display: flex;
  justify-content: center;
  padding-top: 8rem;
  color: ${theme.color.gray['8F']};

  ${({ selectedMenu }) => {
    return css`
      & > :nth-child(${selectedMenu}) {
        color: ${theme.color.gray['00']};
        border-bottom: 5px solid ${theme.color.primary['dark']};
      }
    `;
  }};

  & > :nth-child(2) {
    margin: 0 6rem;
  }
`;

export const Menu = styled.p`
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  color: inherit;
`;

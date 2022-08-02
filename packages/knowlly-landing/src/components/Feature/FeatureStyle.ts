import styled from 'styled-components';
import theme from '@styles/theme';

export const FeatureContainer = styled.section`
  height: 95.6rem;
  background-color: ${theme.color.gray['F7']};
`;

export const MenuContainer = styled.div`
  display: flex;
  & > :nth-child(2) {
    margin: 0 6rem;
  }
`;

export const Menu = styled.div``;

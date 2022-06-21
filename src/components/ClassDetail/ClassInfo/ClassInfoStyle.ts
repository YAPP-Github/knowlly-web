import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  & > :first-child {
    margin-top: 2.4rem;
  }
  & > :not(first-child) {
    margin: 0 2.4rem;
    margin-bottom: 4rem;
  }

  & > :nth-child(2) {
    margin: 0 0 4rem 0 !important;
    padding: 1.8rem 0 2.4rem 2.4rem;
    background-color: ${theme.color.primary['light']};
  }
`;

export const ClassInfoTitle = styled.p`
  margin-bottom: 0.8rem;
  color: ${theme.color.gray['44']};
`;

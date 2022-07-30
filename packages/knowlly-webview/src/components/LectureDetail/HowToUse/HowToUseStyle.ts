import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 4rem;
  color: ${theme.color.gray['44']};

  & > :first-child {
    margin-bottom: 1.2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.7rem;

  & > :first-child {
    margin-right: 0.8rem;
  }
`;

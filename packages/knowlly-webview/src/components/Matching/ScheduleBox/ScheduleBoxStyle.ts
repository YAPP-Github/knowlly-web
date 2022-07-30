import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.4rem;
  margin-bottom: 1.2rem;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${theme.color.gray['CC']};
  border-radius: 0.8rem;
`;

export const TextWrapper = styled.div`
  & > :nth-child(2) {
    margin-top: 0.6rem;
  }
`;

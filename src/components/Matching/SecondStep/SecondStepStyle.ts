import styled from 'styled-components';

export const TextWrapper = styled.div`
  margin-bottom: 2.4rem;
  & > :first-child {
    margin-bottom: 0.4rem;
  }
`;

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 2.4rem;
  margin: 0 1.8rem;

  & > :nth-child(2) {
    margin-bottom: 2rem;
  }
`;

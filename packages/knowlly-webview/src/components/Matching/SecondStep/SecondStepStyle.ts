import { Button } from '@components/Common';
import styled from 'styled-components';

export const TextWrapper = styled.div`
  margin-bottom: 2.4rem;
  & > :first-child {
    margin-bottom: 0.4rem;
  }
`;

export const AlertText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 12rem;
`;

export const ButtonWrapper = styled.div<{ isFocused: boolean }>`
  display: ${(props) => (props.isFocused ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  & > :nth-child(2) {
    margin-bottom: 2rem;
  }
`;

export const MatchingButton = styled(Button)`
  position: fixed;
  bottom: 2.4rem;
  margin: 0 1.6rem;
`;

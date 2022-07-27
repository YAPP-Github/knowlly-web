import { Button } from '@components/Common';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  position: fixed;
  bottom: 2.4rem;
  margin: 0 1.6rem;
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre-line;
`;

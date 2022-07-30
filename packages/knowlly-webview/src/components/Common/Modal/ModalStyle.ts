import styled, { css } from 'styled-components';
import { Button } from '@components/Common';

export const Dimmed = styled.div`
  ${({ theme }) => {
    const { system } = theme.color;

    return css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      height: 100%;
      background-color: ${system.dimmed};
    `;
  }}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 31.2rem;
      padding: 3.6rem 2.6rem 2.4rem;
      border-radius: 2rem;
      background-color: ${gray['FF']};
    `;
  }}
`;

export const ModalTextWrapper = styled.div`
  margin-bottom: 2.8rem;
`;

export const ModalButtonWrapper = styled.div`
  width: 100%;

  & > button:nth-child(1) {
    margin-right: 1.2rem;
  }
`;

export const ModalConfirmButton = styled(Button)`
  width: 100%;
`;

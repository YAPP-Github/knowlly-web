import styled, { css } from 'styled-components';

export const MatchingPopupContainer = styled.div`
  ${({ theme }) => {
    const { primary } = theme.color;

    return css`
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 17rem;
      padding: 2rem 0 2.4rem;
      background-color: ${primary.light};
    `;
  }}
`;

export const MatchingPopupText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  width: 100%;
`;

export const MatchingExpirationDate = styled(MatchingPopupText)`
  margin-bottom: 0.4rem;

  & > p:nth-child(1) {
    margin-right: 0.2rem;
  }
`;

export const MatchingAlertMessage = styled(MatchingPopupText)``;

export const MatchingButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;

  & > button:nth-child(1) {
    margin-right: 1.2rem;
  }
`;

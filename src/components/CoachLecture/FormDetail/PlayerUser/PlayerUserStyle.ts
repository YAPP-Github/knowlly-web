import styled, { css } from 'styled-components';

export const PlayerUserContainer = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      padding: 1.4rem 0rem 1.6rem 0rem;
      border-top: 1px solid ${gray['EF']};
      border-bottom: 1px solid ${gray['EF']};
    `;
  }}
`;

export const PlayerUserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;

  & > p:nth-child(2) {
    margin-left: 0.8rem;
  }
`;

import styled, { css } from 'styled-components';

export const UserFormCardContainer = styled.li`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      display: flex;
      padding-top: 1.2rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${gray['EF']};

      & > div {
        margin-left: 1.6rem;
      }
    `;
  }}
`;

export const userProfileWrapper = styled.div`
  width: 6rem;
  height: 6rem;
`;

export const userInfoWrapper = styled.div`
  margin-bottom: 1.6rem;

  & > p:nth-child(1) {
    margin-bottom: 0.4rem;
  }

  & > p:nth-child(2) {
    margin-bottom: 0.8rem;
  }
`;

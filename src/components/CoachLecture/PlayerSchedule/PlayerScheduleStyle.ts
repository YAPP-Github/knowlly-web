import styled, { css } from 'styled-components';

export const PlayerUserSchedule = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      width: 31.2rem;
      height: 6.4rem;
      margin-top: 2rem;
      padding: 1.2rem 1.6rem;
      border: 1px solid ${gray['CC']};
      border-radius: 0.8rem;
    `;
  }}
`;

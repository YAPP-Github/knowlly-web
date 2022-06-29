import styled, { css } from 'styled-components';

export const LayoutContainer = styled.main<{ isSpacing?: boolean }>`
  ${({ isSpacing }) => {
    return css`
      margin: ${isSpacing && '0 2.4rem'};
    `;
  }}
`;

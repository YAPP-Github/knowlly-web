import styled, { css } from 'styled-components';

export const LayoutContainer = styled.main<{ hasSpacing?: boolean }>`
  ${({ hasSpacing }) => {
    return css`
      margin: ${hasSpacing && '0 2.4rem'};
    `;
  }}
`;

import styled, { css } from 'styled-components';

export const LayoutContainer = styled.main<{ spacing?: boolean }>`
  ${({ spacing }) => {
    return css`
      margin: ${spacing && '0 2.4rem'};
    `;
  }}
`;

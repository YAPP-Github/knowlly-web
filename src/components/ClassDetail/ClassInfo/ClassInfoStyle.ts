import theme from '@styles/theme';
import styled, { css } from 'styled-components';

export const ClassContainer = styled.div<{ time?: boolean }>`
  margin-bottom: 4rem;
  ${({ time }) => {
    if (time) {
      return css`
        padding: 1.8rem 0 2.4rem 2.4rem;
        background-color: ${theme.color.primary['light']};
      `;
    }
  }}
`;

export const ClassInfoTitle = styled.p`
  margin-bottom: 0.8rem;
  color: ${theme.color.gray['44']};
`;

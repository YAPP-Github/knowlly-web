import styled, { css } from 'styled-components';
import { IPageLayoutProps } from './PageLayout';

export const PageLayoutContainer = styled.main<IPageLayoutProps>`
  ${({ isSpacing, start, end }) => {
    return css`
      margin: ${isSpacing && '0 2.4rem'};
      padding-top: ${start && getVerticalPaddingValue(start)};
      padding-bottom: ${end && getVerticalPaddingValue(end)};
    `;
  }}
`;

export const getVerticalPaddingValue = (value?: number) => {
  switch (value) {
    case 1:
      return '0.8rem';
    case 2:
      return '2.4rem';
    case 3:
      return '3.6rem';
    case 4:
      return '4.8rem';
    default:
      return '0';
  }
};

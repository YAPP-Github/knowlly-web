import styled, { css } from 'styled-components';
import { ISectionProps } from './Section';

export const SectionStyle = styled.section<ISectionProps>`
  ${({ spacing, start, end }) => {
    return css`
      margin: ${spacing && '0 2.4rem'};
      margin-top: ${start && getVerticalMarginValue(start)};
      mpargin-bottom: ${end && getVerticalMarginValue(end)};
    `;
  }}
`;

const getVerticalMarginValue = (value?: number) => {
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

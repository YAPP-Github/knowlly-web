import styled, { css } from 'styled-components';
import theme from '@styles/theme';

export const ButtonStyle = styled.button<{ variant: string; size: string; disabled?: boolean }>`
  ${({ variant, size, disabled }) => {
    const { color } = theme;

    return css`
      ${handleVariant(variant)};
      ${handleSize(size)};
      color: ${disabled && color.gray['FF']};
      font-family: 'SUIT-Medium';
      font-size: 1.4rem;
      line-height: 1.6rem;
      background-color: ${disabled && color.gray['DD']};
      border-color: ${disabled && color.gray['DD']};
      border-radius: 10px;
    `;
  }}
`;

const handleVariant = (variant: string) => {
  const { color } = theme;

  switch (variant) {
    case 'contained':
      return css`
        color: ${color.gray['FF']};
        background-color: ${color.primary.basic};
      `;
    case 'outlined':
      return css`
        color: ${color.primary.dark};
        border: 1px solid ${color.primary.dark};
        background-color: ${color.gray['FF']};
      `;
    // no default
  }
};

const handleSize = (size: string) => {
  switch (size) {
    case 'xx-small':
      return css`
        width: 8.5rem;
        height: 2.4rem;
        font-size: 1.2rem !important;
        border-radius: 20px !important;
      `;
    case 'x-small':
      return css`
        width: 12.9rem;
        height: 4rem;
      `;
    case 'small':
      return css`
        width: 15.8rem;
        height: 5.6rem;
      `;
    case 'middle':
      return css`
        width: 31.2rem;
        height: 4.4rem;
      `;
    case 'big':
      return css`
        width: 32.8rem;
        height: 5.6rem;
      `;
    // no default
  }
};

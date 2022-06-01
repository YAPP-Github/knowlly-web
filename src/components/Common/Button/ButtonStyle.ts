import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button<{ variant: string; size?: string; disabled?: boolean }>`
  ${({ variant, size, disabled }) => {
    return css`
      ${handleVariant(variant)};
      ${handleSize(size)};
      color: ${disabled && '#ffffff'};
      font-size: 1.4rem;
      background-color: ${disabled && '#dddddd'};
      border-color: ${disabled && '#dddddd'};
      border-radius: 10px;
    `;
  }}
`;

const handleVariant = (variant: string) => {
  switch (variant) {
    case 'contained':
      return css`
        color: #ffffff;
        background-color: #ff8e4d;
      `;
    case 'outlined':
      return css`
        color: #ff7a00;
        border: 1px solid #ff7a00;
        background-color: #ffffff;
      `;
    // no default
  }
};

const handleSize = (size: string | undefined) => {
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

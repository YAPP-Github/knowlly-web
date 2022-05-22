import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button<{ variant: string; size?: string }>`
  ${({ variant, size }) => {
    return css`
      ${handleVariant(variant)}
      ${handleSize(size)}
      font-size: 1.4rem;
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
    case 'enabled':
      return css`
        color: #8f8f8f;
        background-color: #ffd5ae;
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

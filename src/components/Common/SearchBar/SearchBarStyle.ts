import styled, { css } from 'styled-components';

export const SearchBarContainer = styled.form`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      position: relative;
      width: 100%;
      max-width: 31.2rem;
      height: 4.4rem;
      margin: 0 auto;
      padding: 1.3rem 6.5rem 1.3rem 1.4rem;
      border-radius: 1rem;
      background-color: ${color.gray['F7']};
    `;
  }}
`;

export const SearchBarStyle = styled.input`
  width: 100%;

  font-family: 'SUIT-Medium';
  font-size: 1.2rem;
  line-height: 1.6rem;

  &::placeholder {
    font-family: 'SUIT-Regular';
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.25px;
  }
`;

export const SearchClearButton = styled.button`
  position: absolute;
  top: 1.4rem;
  right: 4rem;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 1.3rem;
  right: 1.4rem;
`;

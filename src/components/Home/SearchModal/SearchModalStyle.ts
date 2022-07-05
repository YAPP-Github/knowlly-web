import styled, { css } from 'styled-components';

export const SearchModalStyle = styled.div`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      height: 100%;
      background-color: ${color.gray['FF']};
    `;
  }}
`;

import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header<{ hasLine?: boolean }>`
  ${({ theme, hasLine }) => {
    const { color } = theme;

    return css`
      position: relative;
      height: 5.6rem;
      border-bottom: ${hasLine && `1px solid ${color.gray['EF']}`};
    `;
  }}
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 2.8rem;
`;

export const ChildrenWapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 6.4rem;
  padding-right: 2.4rem;
`;

import theme from '@styles/theme';
import styled, { css } from 'styled-components';
import Typograpy from '../Typograpy/Typograpy';

export const OutlinedBadgeStyle = styled.div<{ type: string; written?: boolean }>`
  ${({ type, written }) => {
    return css`
      ${handleBadgeType(type, written)}
      display: flex;
      align-items: center;
      width: fit-content;
      height: 2.4rem;
      padding: 0.3rem 0.8rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    `;
  }}
`;
const handleBadgeType = (type: string, written?: boolean) => {
  const color = theme.color;
  switch (type) {
    case 'time':
      return css`
        color: ${color.secondary['indigo']};
        border: 1px solid ${color.secondary['indigo']};
      `;
    case 'review':
      return css`
        color: ${written ? `${color.primary['dark']}` : `${color.gray['8F']}`};
        border: 1px solid ${written ? `${color.primary['dark']}` : `${color.gray['8F']}`};
      `;
  }
};

export const BadgeText = styled(Typograpy)`
  color: inherit;
`;

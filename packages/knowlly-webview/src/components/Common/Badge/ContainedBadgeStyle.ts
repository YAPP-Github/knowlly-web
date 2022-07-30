import theme from '@styles/theme';
import styled, { css } from 'styled-components';
import Typograpy from '../Typograpy/Typograpy';

export const ContainedBadgeStyle = styled.div<{ type: string }>`
  ${({ type }) => {
    return css`
      ${handleBadgeType(type)}
      display: flex;
      align-items: center;
      width: fit-content;
      height: 2.2rem;
      padding: 0.3rem 0.8rem;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 2rem;
    `;
  }}
`;

const handleBadgeType = (type: string) => {
  const color = theme.color;
  switch (type) {
    case 'category':
      return css`
        color: ${color.secondary['indigo']};
        background-color: ${color.secondary['indigoLight']};
      `;
    case 'keyword':
      return css`
        color: ${color.gray['44']};
        background-color: ${color.gray['F7']};
      `;
    case 'player':
      return css`
        color: ${color.primary['dark']};
        background-color: ${color.primary['light']};
      `;
    case 'coach':
      return css`
        color: ${color.secondary['limeDark']};
        background-color: ${color.secondary['limeLight']};
      `;
  }
};

export const BadgeText = styled(Typograpy)`
  color: inherit;
`;

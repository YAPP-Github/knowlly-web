import { PropsWithChildren } from 'react';
import * as Styled from './OutlinedBadgeStyle';

interface IOutlinedBadgeProps {
  type: 'time' | 'review';
  written?: boolean;
}

const OutlinedBadge = (props: PropsWithChildren<IOutlinedBadgeProps>) => {
  const { children, ...rest } = props;
  return (
    <Styled.OutlinedBadgeStyle {...rest}>
      <Styled.BadgeText variant="button-2">{children}</Styled.BadgeText>
    </Styled.OutlinedBadgeStyle>
  );
};

export default OutlinedBadge;

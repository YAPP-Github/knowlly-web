import { PropsWithChildren } from 'react';
import * as Styled from './ContainedBadgeStyle';

interface IContainedBadgeProps {
  type: 'category' | 'keyword' | 'coach' | 'player';
}

const ContainedBadge = (props: PropsWithChildren<IContainedBadgeProps>) => {
  const { children, ...rest } = props;
  return (
    <Styled.ContainedBadgeStyle {...rest}>
      <Styled.BadgeText variant="button-2">{children}</Styled.BadgeText>
    </Styled.ContainedBadgeStyle>
  );
};

export default ContainedBadge;

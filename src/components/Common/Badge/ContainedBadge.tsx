import { PropsWithChildren } from 'react';
import * as Styled from './ContainedBadgeStyle';

interface IContainedBadgeProps {
  type: 'category' | 'keyword' | 'coach' | 'player';
}

const ContainedBadge = (props: PropsWithChildren<IContainedBadgeProps>) => {
  const { children, ...rest } = props;
  return <Styled.ContainedBadgeStyle {...rest}>{children}</Styled.ContainedBadgeStyle>;
};

export default ContainedBadge;

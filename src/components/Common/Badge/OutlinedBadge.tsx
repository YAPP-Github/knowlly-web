import { PropsWithChildren } from 'react';
import * as Styled from './OutlinedBadgeStyle';

interface IOutlinedBadgeProps {
  type: 'time' | 'review';
  written?: boolean;
}

const ContainedBadge = (props: PropsWithChildren<IOutlinedBadgeProps>) => {
  const { children, ...rest } = props;
  return <Styled.OutlinedBadgeStyle {...rest}>{children}</Styled.OutlinedBadgeStyle>;
};

export default ContainedBadge;

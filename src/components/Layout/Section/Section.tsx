import React, { PropsWithChildren } from 'react';
import * as Styled from './SectionStyle';

export interface ISectionProps {
  spacing?: boolean;
  start?: 1 | 2 | 3 | 4;
  end?: 1 | 2 | 3 | 4;
}

const Section = (props: PropsWithChildren<ISectionProps>) => {
  const { children, ...rest } = props;

  return <Styled.SectionStyle {...rest}>{children}</Styled.SectionStyle>;
};

export default Section;

import { PropsWithChildren } from 'react';
import * as Styled from './TypograpyStyle';

type Headline = 'headline-1' | 'headline-2' | 'headline-3' | 'headline-4';
type Subtitle = 'subtitle-1' | 'subtitle-2' | 'subtitle-3' | 'subtitle-4';
type Body = 'body-1' | 'body-2';
type Button = 'button-1' | 'button-2';

export interface ITypograpyProps {
  variant: Headline | Subtitle | Body | Button | 'caption' | 'overline';
}

const Typograpy = (props: PropsWithChildren<ITypograpyProps>) => {
  const { variant, children } = props;

  const paragraphVariants = [
    'subtitle-1',
    'subtitle-2',
    'subtitle-3',
    'subtitle-4',
    'body-1',
    'body-2',
  ];
  const spanVariants = ['button-1', 'button-2', 'caption', 'overline'];

  return (
    <>
      {variant === 'headline-1' && <Styled.Headline1>{children}</Styled.Headline1>}
      {variant === 'headline-2' && <Styled.Headline2>{children}</Styled.Headline2>}
      {variant === 'headline-3' && <Styled.Headline3>{children}</Styled.Headline3>}
      {variant === 'headline-4' && <Styled.Headline4>{children}</Styled.Headline4>}

      {paragraphVariants.includes(variant) && (
        <Styled.ParagraphElementStyle variant={variant}>{children}</Styled.ParagraphElementStyle>
      )}

      {spanVariants.includes(variant) && (
        <Styled.SpanElementStyle variant={variant}>{children}</Styled.SpanElementStyle>
      )}
    </>
  );
};

export default Typograpy;

import styled, { css } from 'styled-components';
import { ITypograpyProps } from './Typograpy';

export const Headline1 = styled.h1`
  font-family: 'SUIT-Semibold';
  font-size: 3.4rem;
  line-height: 4.4rem;
`;

export const Headline2 = styled.h2`
  font-family: 'SUIT-Semibold';
  font-size: 2.8rem;
  line-height: 3.8rem;
`;

export const Headline3 = styled.h3`
  font-family: 'SUIT-Bold';
  font-size: 2.2rem;
  line-height: 3.4rem;
`;

export const Headline4 = styled.h4`
  font-family: 'SUIT-Bold';
  font-size: 2rem;
  line-height: 3rem;
`;

export const ParagraphElementStyle = styled.p<ITypograpyProps>`
  ${({ variant }) => {
    return css`
      ${getParagraphStyle(variant)};
    `;
  }}
`;

export const SpanElementStyle = styled.span<ITypograpyProps>`
  ${({ variant }) => {
    return css`
      ${getSpanElementStyle(variant)};
    `;
  }}
`;

const getParagraphStyle = (variant: string) => {
  switch (variant) {
    case 'subtitle-1':
      return css`
        font-family: 'SUIT-Semibold';
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: -0.25px;
      `;
    case 'subtitle-2':
      return css`
        font-family: 'SUIT-Semibold';
        font-size: 1.6rem;
        line-height: 2.4rem;
      `;
    case 'subtitle-3':
      return css`
        font-family: 'SUIT-Regular';
        font-size: 1.6rem;
        line-height: 2.2rem;
      `;
    case 'subtitle-4':
      return css`
        font-family: 'SUIT-Regular';
        font-size: 1.6rem;
        line-height: 2.2rem;
        letter-spacing: -0.25px;
      `;
    case 'body-1':
      return css`
        font-family: 'SUIT-Regular';
        font-size: 1.4rem;
        line-height: 2rem;
        letter-spacing: -0.25px;
      `;
    case 'body-2':
      return css`
        font-family: 'SUIT-Regular';
        font-size: 1.2rem;
        line-height: 1.8rem;
        letter-spacing: -0.25px;
      `;
  }
};

const getSpanElementStyle = (variant: string) => {
  switch (variant) {
    case 'button-1':
      return css`
        font-family: 'SUIT-Medium';
        font-size: 1.4rem;
        line-height: 1.6rem;
      `;
    case 'button-2':
      return css`
        font-family: 'SUIT-Medium';
        font-size: 1.2rem;
        line-height: 1.6rem;
      `;
    case 'caption':
      return css`
        font-family: 'SUIT-Regular';
        font-size: 1rem;
        line-height: 1.6rem;
      `;
    case 'overline':
      return css`
        font-family: 'SUIT-Medium';
        font-size: 1rem;
        line-height: 0.2px;
      `;
  }
};

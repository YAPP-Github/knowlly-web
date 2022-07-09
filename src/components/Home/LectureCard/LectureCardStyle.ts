import styled, { css } from 'styled-components';
import { Typograpy } from '@components/Common';

export const LectureCardContainer = styled.a`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      display: flex;
      padding: 1.4rem 0;
      border-bottom: 1px solid ${color.gray['EF']};
    `;
  }}
`;

export const LectureImageWrapper = styled.div`
  min-width: 8.8rem;
  min-height: 8.8rem;
`;

export const LectureInfoWrapper = styled.div`
  padding-left: 1.8rem;
`;

export const LectureIntroduce = styled(Typograpy)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  margin-bottom: 0.4rem;
`;

export const LectureCoachName = styled(Typograpy)`
  margin-bottom: 2.4rem;
`;

export const LectureTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

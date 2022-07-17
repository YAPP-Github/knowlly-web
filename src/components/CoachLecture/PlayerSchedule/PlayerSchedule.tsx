import { useMemo } from 'react';
import { Typograpy } from '@components/Common';
import { formatDate, formatTime, getLectureTime } from '@utils';
import * as Styled from './PlayerScheduleStyle';

interface IPlayerScheduleProps {
  startAt: string;
  endAt: string;
}

const PlayerSchedule = ({ startAt, endAt }: IPlayerScheduleProps) => {
  const scheduleSentByPlayer = useMemo(() => {
    const startTime = formatTime(startAt);
    const lectureTime = getLectureTime(startAt, endAt);

    return `${startTime} (${lectureTime}시간 수업)`;
  }, [startAt, endAt]);

  return (
    <>
      <Typograpy variant="body-2" textColor="gray8F">
        해당 일정에 클래스를 여는 것이 가능하다면 수락해주세요.
      </Typograpy>
      <Styled.PlayerUserSchedule>
        <Typograpy variant="subtitle-4">{formatDate(startAt)}</Typograpy>
        <Typograpy variant="body-2" textColor="gray6B">
          {scheduleSentByPlayer}
        </Typograpy>
      </Styled.PlayerUserSchedule>
    </>
  );
};

export default PlayerSchedule;

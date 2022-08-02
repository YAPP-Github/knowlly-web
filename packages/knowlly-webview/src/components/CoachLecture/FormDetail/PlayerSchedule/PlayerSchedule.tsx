import { memo, useMemo } from 'react';
import { Typograpy } from '@components/Common';
import { PlayerInfo, Loading } from '@components/CoachLecture';
import { formatDate, formatTime, getLectureTime } from '@utils';
import * as Styled from './PlayerScheduleStyle';

interface IPlayerScheduleProps {
  formId: number;
  startAt: string;
  endAt: string;
  isFetching: boolean;
}

const PlayerSchedule = memo(({ formId, startAt, endAt, isFetching }: IPlayerScheduleProps) => {
  const scheduleSentByPlayer = useMemo(() => {
    const startTime = formatTime(startAt);
    const lectureTime = getLectureTime(startAt, endAt);

    return `${startTime} (${lectureTime}시간 수업)`;
  }, [formId, startAt, endAt]);

  return (
    <PlayerInfo title="플레이어가 보낸 일정">
      <Typograpy variant="body-2" textColor="gray8F">
        해당 일정에 클래스를 여는 것이 가능하다면 수락해주세요.
      </Typograpy>
      <Styled.PlayerUserSchedule>
        {isFetching ? (
          <Loading.PlayerSchedule />
        ) : (
          <>
            <Typograpy variant="subtitle-4">{formatDate(startAt)}</Typograpy>
            <Typograpy variant="body-2" textColor="gray6B">
              {scheduleSentByPlayer}
            </Typograpy>
          </>
        )}
      </Styled.PlayerUserSchedule>
    </PlayerInfo>
  );
});

export default PlayerSchedule;

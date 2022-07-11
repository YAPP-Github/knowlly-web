import { Typograpy } from '@components/Common';
import { formatDate } from '@utils';
import * as Styled from './PlayerScheduleStyle';

interface IPlayerScheduleProps {
  schedules: string;
}

const PlayerSchedule = ({ schedules }: IPlayerScheduleProps) => {
  return (
    <>
      <Typograpy variant="body-2" textColor="gray8F">
        해당 일정에 클래스를 여는 것이 가능하다면 수락해주세요.
      </Typograpy>
      <Styled.PlayerUserSchedule>
        <Typograpy variant="subtitle-4">{formatDate(schedules)}</Typograpy>
      </Styled.PlayerUserSchedule>
    </>
  );
};

export default PlayerSchedule;

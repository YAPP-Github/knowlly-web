import dayjs from 'dayjs';
const week = ['일', '월', '화', '수', '목', '금', '토'];

export const formatDate = (schedule: string, type = 'month') => {
  const time = dayjs(schedule);

  const month = time.get('month') + 1;
  const date = time.get('date');
  const day = time.get('day');

  let formatResult = month + '월 ' + date + '일 (' + week[day] + ')';

  if (type === 'year') {
    const year = time.get('year');

    formatResult = year + '년 ' + formatResult;
  }

  return formatResult;
};

export const formatTime = (schedule: string) => {
  const time = dayjs(schedule);

  const hour = time.get('hour');
  const minute = time.get('minute');

  if (hour >= 0 && hour <= 11) return '오전 ' + hour + ':' + minute;
  else return '오후 ' + (hour - 12) + ':' + minute;
};

export const getLectureTime = (startAt: string, endAt: string) => {
  const startHour = dayjs(startAt).get('hour');
  const endHour = dayjs(endAt).get('hour');
  return endHour - startHour;
};

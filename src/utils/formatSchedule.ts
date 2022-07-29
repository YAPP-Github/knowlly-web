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
  let timeHeader = '';
  let zero = '';

  if (hour >= 0 && hour <= 11) timeHeader = '오전 ';
  else timeHeader = '오후 ';

  if (minute < 10) zero += '0';

  return timeHeader + hour + ':' + zero + minute;
};

export const getLectureTime = (startAt: string, endAt: string) => {
  const startHour = dayjs(startAt).get('hour');
  const endHour = dayjs(endAt).get('hour');

  if (endHour - startHour < 0) return endHour - startHour + 24;

  return endHour - startHour;
};

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function toDateString(date?: string): string {
  if (!date) return '';
  const dateObj = new Date(date);

  return `${WEEK_DAYS[dateObj.getDay()]}, ${dateObj.getDate()} ${
    MONTHS[dateObj.getMonth()]
  } ${dateObj.getFullYear()}`;
}

export function minutesToHour(minutes?: number) {
  if (!minutes) return '';

  const remainMinutes = minutes % 60;
  const hours = (minutes - remainMinutes) / 60;
  return hours > 0 ? `${hours}h${remainMinutes}min` : `${remainMinutes}min`;
}

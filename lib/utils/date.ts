import { format as formatJalali } from 'date-fns-jalali';

export const formatPersianDate = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatJalali(dateObj, 'yyyy/MM/dd');
};
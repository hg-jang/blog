/**
 * @typedef {Intl.DateTimeFormatOptions['dateStyle']} DateStyle
 * @typedef {Intl.DateTimeFormatOptions['timeStyle']} TimeStyle
 */

/**
 * @param {string} date
 * @param {DateStyle} [dateStyle]
 * @param {TimeStyle} [timeStyle]
 * @param {string} [locales]
 */
export function formatDate(date, dateStyle = 'full', timeStyle = 'short', locales = 'ko-KR') {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle, timeStyle, hour12: false });
  return formatter.format(new Date(date));
}

export default function dateFormat(date) {
  const d = date.slice(0, -14);
  const day = d.slice(8);
  const month = parseInt(d.slice(5, 7));
  const year = d.slice(0, 4);
  const months = [
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
  const getMonth = months[month - 1];
  const newDate = `${getMonth} ${day}, ${year}`;
  return newDate;
}

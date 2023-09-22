
// https://stackoverflow.com/questions/56057128/javascript-date-parsing-returning-strange-results-in-chrome
export function createDate(s: string): Date {
  let [dateString, timeString] = s.split("T")
  let [year, month, date] = dateString.split("-").map(Number)
  let clearTimeString = timeString.split(/[Z+-]/)[0]
  let [hours, minutes, seconds] = clearTimeString.split(":").map(Number)

  return new Date(year, month - 1, date, hours, minutes, seconds)
}

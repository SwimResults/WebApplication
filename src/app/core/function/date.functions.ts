
// Date Helper Functions
// some dates are stored as 0001-01-03T10:11:00.000Z
// some are stored as 2024-04-13T10:11:00.000Z
// methods can be used to get the correct times with time zone shift + winter/summer


// https://stackoverflow.com/questions/56057128/javascript-date-parsing-returning-strange-results-in-chrome
export function createDate(s: string): Date {
  const [dateString, timeString] = s.split("T")
  const [year, month, date] = dateString.split("-").map(Number)
  const clearTimeString = timeString.split(/[Z+-]/)[0]
  const [hours, minutes, seconds] = clearTimeString.split(":").map(Number)

  return new Date(year, month - 1, date, hours, minutes, seconds)
}

export function createDatePlusOne(s: string): Date {
    const [dateString, timeString] = s.split("T")
    const [year, month, date] = dateString.split("-").map(Number)
    const clearTimeString = timeString.split(/[Z+-]/)[0]
    const [hours, minutes, seconds] = clearTimeString.split(":").map(Number)

    return new Date(year, month - 1, date, hours+2, minutes, seconds)
}

export function createDateFromUTC(s: string): Date {
    return new Date(s);
}

export function createDateForBerlin(s: string): Date {
    const d = new Date(s);
    return convertTZ(d, "Europe/Berlin");
}

//https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
function convertTZ(date: Date, tzString: string): Date {
    return new Date(date.toLocaleString("en-US", {timeZone: tzString}));
}

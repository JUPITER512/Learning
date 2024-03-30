const date=new Date();
console.log(date);
console.log(typeof date);
console.log(date.getFullYear(), date.getMonth(), date.getDate());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.toJSON());
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleString("PK"));
console.log(date.toLocaleDateString());
const newDate=new Date(2024,11,24);
console.log(newDate.toDateString());
const nDate=new Date("YYYY-MM-DDTHH:mm:ss")
console.log(nDate)
const datenow = Date.now();
console.log(datenow/1000);

// getDate(): Returns the day of the month (1-31).
// getMonth(): Returns the month (0-11).
// getFullYear(): Returns the year (four digits).
// getDay(): Returns the day of the week (0-6), where Sunday is 0 and Saturday is 6.
// getHours(): Returns the hour (0-23).
// getMinutes(): Returns the minutes (0-59).
// getSeconds(): Returns the seconds (0-59).
// getMilliseconds(): Returns the milliseconds (0-999).
// toDateString(): Returns the date portion of the Date object as a human-readable string.
// toISOString(): Returns a string representing the Date object as an ISO formatted string.
// toLocaleDateString(): Returns a string representing the date portion of the Date object according to the locale settings.
// toLocaleTimeString(): Returns a string representing the time portion of the Date object according to the locale settings.
// toLocaleString(): Returns a string representing the Date object converted to a string using the current locale.
// toTimeString(): Returns the time portion of the Date object as a human-readable string.
// toString(): Returns a string representing the Date object.
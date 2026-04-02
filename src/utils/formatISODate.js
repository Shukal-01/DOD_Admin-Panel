export function formatISODate(isoString) {
  // Parse the ISO 8601 timestamp
  let date = new Date(isoString)

  // Define options for formatting
  let options = {
    weekday: 'long', // "Wednesday"
    year: 'numeric', // "2024"
    month: 'long', // "June"
    day: 'numeric', // "5"
    hour: '2-digit', // "06"
    minute: '2-digit', // "01"
    second: '2-digit', // "15"
    timeZoneName: 'short', // "GMT"
  }

  // Create formatter
  let formatter = new Intl.DateTimeFormat('en-US', options)

  // Format the date to a readable string
  return formatter.format(date)
}

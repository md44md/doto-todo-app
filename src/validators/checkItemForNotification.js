const TIME_WINDOW_MINUTES = 15;

function toDateString(date){
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function checkItemForNotification(item, now) {
  const todayString = toDateString(now);
  const isToday = item.date === todayString

  const shouldNotifyDate = isToday && item.dateNotifiedFor !== todayString;
  
  let shouldNotifyTime = false;

  if (item.time && isToday) {
    const [hours, minutes] = item.time.split(':').map(Number);
    const itemDateTime = new Date(now);
    itemDateTime.setHours(hours, minutes, 0, 0);

    const msUntilItem = itemDateTime.getTime() - now.getTime();
    const minutlesUntiltem = msUntilItem / (1000 * 60);

    const isWithinWindow = minutesUntiltem >= 0 && minutesUntiltem <= TIME_WINDOW_MINUTES;

    shouldNotifyTime = isWithinWindow && item.timeNotifiedFor !== todayString;
  }
  return { shouldNotifyDate, shouldNotifyTime };
}
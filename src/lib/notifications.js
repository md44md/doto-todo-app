const TIME_WINDOW_MINUTES = 15;

// Format date object into date string
export function toDateString(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
    }

// Check single item against current time and decide whether each notif should fire
export function checkItemForNotification(item, now) {
    const todayString = toDateString(now);
    const isToday = item.date === todayString

    const shouldNotifyDate = isToday && item.dateNotifiedFor !== todayString;
    
    let shouldNotifyTime = false;
    let shouldNotifyNow = false;

    if (item.time && isToday) {
        // Calculate current time from time
        const [hours, minutes] = item.time.split(':').map(Number);
        const itemDateTime = new Date(now);
        itemDateTime.setHours(hours, minutes, 0, 0);

        const msUntilItem = itemDateTime.getTime() - now.getTime();
        const minutesUntilItem = msUntilItem / (1000 * 60);

        const isWithinTimeWindow = minutesUntilItem >= 0 && minutesUntilItem <= TIME_WINDOW_MINUTES;
        shouldNotifyTime = isWithinTimeWindow && item.timeNotifiedFor !== todayString;

        const isWithinNowWindow = minutesUntilItem >= -1 && minutesUntilItem <= 1;
        shouldNotifyNow = isWithinNowWindow && item.nowNotifiedFor !== todayString;
    }
    return { shouldNotifyDate, shouldNotifyTime, shouldNotifyNow };
}

// Ask browser for notif permission
export async function requestNotificationPermission() {
    if (!("Notification" in window)) {
        return "unsupported";
    }

    if (Notification.permission === "granted" || Notification.permission === "denied") {
        return Notification.permission;
    }

    const result = await Notification.requestPermission();
    return result;
}
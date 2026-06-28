import {useEffect } from 'react';
import { checkItemForNotification, toDateString } from '../lib/notifications';

const CHECK_INTERVAL_MS = 60 * 1000; // Check every minute

export function useNotifications(groups) {
    useEffect(() => {
        if (!("Notification" in window)) return;   
        if (Notification.permission !== 'granted') return;

        function runCheck() {
            console.log("runCheck firing", new Date());
            const now = new Date();
            const todayString = toDateString(now);

            for (const group of groups){
                for (const item of group.items){
                    const {shouldNotifyDate, shouldNotifyTime, shouldNotifyNow} = checkItemForNotification(item, now);

                    if (shouldNotifyDate){
                        new Notification("Due today", { body: item.title });
                        group.updateItem(item.id, { dateNotifiedFor: todayString });
                    }

                    if (shouldNotifyTime){
                        new Notification("Coming up soon", { body: item.title });
                        group.updateItem(item.id, { timeNotifiedFor: todayString });
                    }
                    
                    if (shouldNotifyNow){
                        new Notification("Starting now", { body: item.title });
                        group.updateItem(item.id, { nowNotifiedFor: todayString });
                    }
                }
            }
        }

        const intervalId = setInterval(runCheck, CHECK_INTERVAL_MS);
        return() => clearInterval(intervalId);
    }, [groups]);
}
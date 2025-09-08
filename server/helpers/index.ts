import { startOfDay, startOfWeek, startOfMonth } from "date-fns";

export function getDateRanges(){
    const now = new Date();
    return {
        today: startOfDay(now),
        thisWeek: startOfWeek(now, { weekStartsOn: 1 }),
        thisMonth: startOfMonth(now)
    }
}
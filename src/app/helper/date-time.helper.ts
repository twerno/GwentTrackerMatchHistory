import * as c from 'app/const/const';

export class DateTimeHelper {

    static months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    static nowPlusHours(hours: number): Date {
        const result: Date = new Date();
        result.setHours(result.getHours() + hours);
        DateTimeHelper.normalizeFullHours(result);
        return result;
    }

    static nowPlusDays(days: number): Date {
        return DateTimeHelper.plusDays(new Date(), days);
    }

    static plusDays(baseDate: Date, days: number): Date {
        const result: Date = new Date(baseDate.getTime());
        result.setDate(result.getDate() + days);
        DateTimeHelper.normalizeFullDays(result);
        return result;
    }

    static normalizeFullHours(date: Date): void {
        if (date === null) {
            return;
        }
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    }

    static normalizeFullDays(date: Date): void {
        if (date === null) {
            return;
        }
        DateTimeHelper.normalizeFullHours(date);
        date.setHours(0);
    }

    static date2StringAgo(value: Date): string {
        if (!(value instanceof Date)) {
            throw new Error(`Typeof: ${typeof value} expected 'Date'`);
        }

        const delta: number = Math.floor((Date.now() - value.getTime()) / 1000);

        if (delta < 0 || delta > 7 * c.secPerDay) {
            return `${value.getDate()} ${this.month2short(value.getMonth())} ${value.getFullYear()}`;
        } else if (delta === 0 || delta === 1) {
            return `1 second ago`
        } else if (delta < c.secPerMinute) {
            return `${delta} seconds ago`;
        } else if (delta < 2 * c.secPerMinute) {
            return `1 minute ago`;
        } else if (delta < c.secPerHour) {
            return `${Math.floor(delta / 60)} minutes ago`;
        } else if (delta < 2 * c.secPerHour) {
            return `1 hour ago`;
        } else if (delta < c.secPerDay) {
            return `${Math.floor(delta / 3600)} hours ago`;
        } else if (delta < 2 * c.secPerDay) {
            return `1 day ago`;
        } else if (delta < 7 * c.secPerDay) {
            return `${Math.floor(delta / (3600 * 24))} day ago`;
        } else {
            return `${value.getDate()} ${this.month2short(value.getMonth())} ${value.getFullYear()}`;
        }
    }

    static month2short(month: number): string {
        return this.months[month];
    }
}

export class DateTimeHelper {

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

}

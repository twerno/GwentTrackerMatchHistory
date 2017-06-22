export class DateTimeHelper {

    static nowPlusHours(hours: number): Date {
        const result: Date = new Date();
        result.setHours(result.getHours() - hours);
        return result;
    }

    static nowPlusDays(days: number): Date {
        const result: Date = new Date();
        result.setDate(result.getDate() - days);
        return result;
    }

}

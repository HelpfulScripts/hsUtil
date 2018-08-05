export declare function date(formatString: string, date?: Date): string;
export declare const ms: {
    fromMinutes: (min: number) => number;
    fromHours: (h: number) => number;
    fromDays: (d: number) => number;
    fromWeeks: (w: number) => number;
    toMinutes: (ms: number) => number;
    toHours: (ms: number) => number;
    toDays: (ms: number) => number;
    toWeeks: (ms: number) => number;
};

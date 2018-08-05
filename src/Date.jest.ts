import { date, ms } from './Date';


describe('date', () => {
	it('should have date defined as a function', () => {
		expect(date).not.toBe(undefined);
		expect(typeof date).toEqual('function');
	});
  
	describe('formatting of date 7/4/2010', () => {
		let d = new Date('7/4/2010');

		it('should convert "%YYYY-%MMMM-%DD"', () => {
			expect(date("%YYYY-%MMMM-%DD", d)).toEqual("2010-July-04");
		});

		it('should convert "%YY%MMM%D %YY"', () => {
			expect(date("%YY%MMM%D %YY", d)).toEqual("10Jul4 10");
		});

		it('should convert "%YY%MM%D %h:%m:%ss.%j"', () => {
			expect(date("%YY%MM%D %h:%m:%ss.%j", d)).toEqual("10074 0:0:00.0");
		});

		it('should convert "%DDD, %YY%MM%DD %hh:%mm:%ss.%jj"', () => {
			expect(date("%DDD, %YY%MM%DD %hh:%mm:%ss.%jj", d)).toEqual("Sun, 100704 00:00:00.00");
		});

		it('should convert "%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj"', () => {
			expect(date("%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj", d)).toEqual("Sunday, 100704 00:00:00.000");
		});
	});
	
	describe('formatting of current date', () => {
		let now = new Date();
		
		it('should format ' + now.toDateString(), () => {
			expect(date("%YYYY-%MM-%DD")).toEqual(date("%YYYY-%MM-%DD", now));
		});
	});
});

describe('ms', () => {
    const time = 3.75;
    it('fromMinutes', () => expect(ms.fromMinutes(time)).toEqual(time*60*1000));
    it('fromHours',   () => expect(ms.fromHours(time)).toEqual(time*60*60*1000));
    it('fromDays',    () => expect(ms.fromDays(time)).toEqual(time*24*60*60*1000));
    it('fromWeeks',    () => expect(ms.fromWeeks(time)).toEqual(time*7*24*60*60*1000));
    it('toMinutes', () => expect(ms.toMinutes(time*60*1000)).toEqual(time));
    it('toHours',   () => expect(ms.toHours(time*60*60*1000)).toEqual(time));
    it('toDays',    () => expect(ms.toDays(time*24*60*60*1000)).toEqual(time));
    it('toWeeks',    () => expect(ms.toWeeks(time*7*24*60*60*1000)).toEqual(time));
});

import { date, ms } from './Date';
import { o }        from 'hslayout';


o.spec("date", () => {
	o('should have date defined as a function', () => {
		o(date).notEquals(undefined);
		o(typeof date).equals('function');
	});
  
	o.spec('formatting of date 7/4/2010', () => {
		let d = new Date('7/4/2010');

		o('should convert "%YYYY-%MMMM-%DD"', () => {
			o(date("%YYYY-%MMMM-%DD", d)).equals("2010-July-04");
		});

		o('should convert "%YY%MMM%D %YY"', () => {
			o(date("%YY%MMM%D %YY", d)).equals("10Jul4 10");
		});

		o('should convert "%YY%MM%D %h:%m:%ss.%j"', () => {
			o(date("%YY%MM%D %h:%m:%ss.%j", d)).equals("10074 0:0:00.0");
		});

		o('should convert "%DDD, %YY%MM%DD %hh:%mm:%ss.%jj"', () => {
			o(date("%DDD, %YY%MM%DD %hh:%mm:%ss.%jj", d)).equals("Sun, 100704 00:00:00.00");
		});

		o('should convert "%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj"', () => {
			o(date("%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj", d)).equals("Sunday, 100704 00:00:00.000");
		});
	});
	
	o.spec('formatting of current date', () => {
		let now = new Date();
		
		o('should format ' + now.toDateString(), () => {
			o(date("%YYYY-%MM-%DD")).equals(date("%YYYY-%MM-%DD", now));
		});
	});
});

o.spec("ms", () => {
    const time = 3.75;
    o('fromMinutes', () => o(ms.fromMinutes(time)).equals(time*60*1000));
    o('fromHours',   () => o(ms.fromHours(time)).equals(time*60*60*1000));
    o('fromDays',    () => o(ms.fromDays(time)).equals(time*24*60*60*1000));
    o('fromWeeks',    () => o(ms.fromWeeks(time)).equals(time*7*24*60*60*1000));
    o('toMinutes', () => o(ms.toMinutes(time*60*1000)).equals(time));
    o('toHours',   () => o(ms.toHours(time*60*60*1000)).equals(time));
    o('toDays',    () => o(ms.toDays(time*24*60*60*1000)).equals(time));
    o('toWeeks',    () => o(ms.toWeeks(time*7*24*60*60*1000)).equals(time));
});

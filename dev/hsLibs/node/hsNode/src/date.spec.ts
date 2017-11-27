import { date } from './';


describe("date", function() {
	it('should have date defined as a function', function() {
		expect(date).toBeDefined();
		expect(typeof date).toBe('function');
	});
  
	describe('formatting of date 7/4/2010', function() {
		let d = new Date('7/4/2010');

		it('should convert "%YYYY-%MMMM-%DD"', function() {
			expect(date("%YYYY-%MMMM-%DD", d)).toBe("2010-July-04");
		});

		it('should convert "%YY%MMM%D %YY"', function() {
			expect(date("%YY%MMM%D %YY", d)).toBe("10Jul4 10");
		});

		it('should convert "%YY%MM%D %h:%m:%ss.%j"', function() {
			expect(date("%YY%MM%D %h:%m:%ss.%j", d)).toBe("10074 0:0:00.0");
		});

		it('should convert "%DDD, %YY%MM%DD %hh:%mm:%ss.%jj"', function() {
			expect(date("%DDD, %YY%MM%DD %hh:%mm:%ss.%jj", d)).toBe("Sun, 100704 00:00:00.00");
		});

		it('should convert "%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj"', function() {
			expect(date("%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj", d)).toBe("Sunday, 100704 00:00:00.000");
		});
	});
	
	describe('formatting of current date', function() {
		let now = new Date();
		
		it('should format ' + now.toDateString(), function() {
			expect(date("%YYYY-%MM-%DD")).toBe(date("%YYYY-%MM-%DD", now));
		});
	});
});

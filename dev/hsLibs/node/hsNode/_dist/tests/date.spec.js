"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
describe("date", function () {
    it('should have date defined as a function', function () {
        expect(_1.hsDate).toBeDefined();
        expect(typeof _1.hsDate).toBe('function');
    });
    describe('formatting of date 7/4/2010', function () {
        let d = new Date('7/4/2010');
        it('should convert "%YYYY-%MMMM-%DD"', function () {
            expect(_1.hsDate("%YYYY-%MMMM-%DD", d)).toBe("2010-July-04");
        });
        it('should convert "%YY%MMM%D %YY"', function () {
            expect(_1.hsDate("%YY%MMM%D %YY", d)).toBe("10Jul4 10");
        });
        it('should convert "%YY%MM%D %h:%m:%ss.%j"', function () {
            expect(_1.hsDate("%YY%MM%D %h:%m:%ss.%j", d)).toBe("10074 0:0:00.0");
        });
        it('should convert "%DDD, %YY%MM%DD %hh:%mm:%ss.%jj"', function () {
            expect(_1.hsDate("%DDD, %YY%MM%DD %hh:%mm:%ss.%jj", d)).toBe("Sun, 100704 00:00:00.00");
        });
        it('should convert "%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj"', function () {
            expect(_1.hsDate("%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj", d)).toBe("Sunday, 100704 00:00:00.000");
        });
    });
    describe('formatting of current date', function () {
        let now = new Date();
        it('should format ' + now.toDateString(), function () {
            expect(_1.hsDate("%YYYY-%MM-%DD")).toBe(_1.hsDate("%YYYY-%MM-%DD", now));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUE0QjtBQUc1QixRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ2hCLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtRQUM1QyxNQUFNLENBQUMsU0FBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLE9BQU8sU0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLDZCQUE2QixFQUFFO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTdCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtZQUN0QyxNQUFNLENBQUMsU0FBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxTQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHdDQUF3QyxFQUFFO1lBQzVDLE1BQU0sQ0FBQyxTQUFNLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrREFBa0QsRUFBRTtZQUN0RCxNQUFNLENBQUMsU0FBTSxDQUFDLGlDQUFpQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7WUFDeEQsTUFBTSxDQUFDLFNBQU0sQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsNEJBQTRCLEVBQUU7UUFDdEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVyQixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxTQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBTSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9
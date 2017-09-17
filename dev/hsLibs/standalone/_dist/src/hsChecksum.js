"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shortCheckSum(s) {
    var chk = 0x12345678;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
exports.shortCheckSum = shortCheckSum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNDaGVja3N1bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oc0NoZWNrc3VtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUMsdUJBQThCLENBQVE7SUFDbkMsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDO0lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQVBELHNDQU9DIn0=
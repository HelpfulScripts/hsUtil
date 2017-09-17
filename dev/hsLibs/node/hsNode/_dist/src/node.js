"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require('util');
function inspect(obj, depth = null, colors = true) {
    return util.inspect(obj, { colors: colors, depth: depth });
}
exports.inspect = inspect;
function timeout(ms) { return new Promise((resolve, reject) => { setTimeout(reject, ms); }); }
exports.timeout = timeout;
function delay(ms) { return new Promise(resolve => { setTimeout(resolve, ms); }); }
exports.delay = delay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBbUJBLE1BQU0sSUFBSSxHQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQVk5QixpQkFBd0IsR0FBTyxFQUFFLFFBQWEsSUFBSSxFQUFFLE1BQU0sR0FBQyxJQUFJO0lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUZELDBCQUVDO0FBVUQsaUJBQXdCLEVBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxPQUFPLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBNUcsMEJBQTRHO0FBVTVHLGVBQXNCLEVBQVMsSUFBTSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxNQUFNLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBbkcsc0JBQW1HIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require('child_process');
const _1 = require("./");
function exec(command, options) {
    return new Promise((resolve, reject) => {
        cp.exec(command, options, (error, stdout, stderr) => {
            if (error) {
                _1.log.error('exec for ' + command + ': ' + error);
                reject(error);
            }
            else {
                resolve({ out: stdout, err: stderr });
            }
        });
    });
}
exports.exec = exec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NwVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxHQUFNLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2Qyx5QkFBeUI7QUEyQnpCLGNBQWMsT0FBYyxFQUFFLE9BQVk7SUFDdEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBK0MsRUFBRSxNQUF1QjtRQUN4RixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFZLEVBQUUsTUFBYSxFQUFFLE1BQWE7WUFDakUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVRLG9CQUFJIn0=
var m = require("mithril");
import { HsSite } from './view/Site';
import { Modules } from './Modules';
Modules.loadList();
m.route(document.body, '/api/', {
    '/api/': HsSite,
    '/api/:lib/': HsSite,
    '/api/:lib/:field': HsSite // defines `http://localhost/#!/api/:hsLib/:log
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTNCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUdwQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUM1QixPQUFPLEVBQWEsTUFBTTtJQUMxQixZQUFZLEVBQVEsTUFBTTtJQUMxQixrQkFBa0IsRUFBRSxNQUFNLENBQUksK0NBQStDO0NBQ2hGLENBQUMsQ0FBQyJ9
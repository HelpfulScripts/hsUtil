/**
 * @ngdoc object
 * @name hsNode.date
 * @description .
 * ### Date formatting support. 
 * Formats are specified in a printf-style format string. 
 * ### Example:
 * <pre>
 * import date  from './date';
 * date('%MM/%DD/%YY');           // -> 08/17/16 (using current date)
 * let d = new Date('7/4/2010');
 * date('%DDDD, %MM/%DD/%YY', d); // -> Sunday, 07/04/10
 * </pre>
 * ### Supported Formats
- `%YY, %YYYY`           : two- or four-digit year, as '73', '1973'
- `%M, %MM, %MMM, %MMMM` : month of year as '2', '02', 'Feb', 'February'
- `%D, %DD`              : day of month as '5', '05' (1...31)
- `%DDD, %DDDD`          : day of week as 'Tue', 'Tuesday'
- `%h, %hh`              : hour of day as '7', '07 (0...23)
- `%m, %mm`              : minutes as '6', '06' (0..59)
- `%ss`                  : seconds as '09' (0...59)
- `%j, %jj, %jjj`        : milliseconds as '1', '15', '159'
 */

/** translates short month names to full month names */
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']];

/** translates short day names to full day names */
const dayStr = [
    ['Sun', 'Sunday'],['Mon', 'Monday'],['Tue', 'Tuesday'],['Wed', 'Wednesday'],['Thu', 'Thursday'],['Fri', 'Friday'],['Sat', 'Saturday']];

/**
 * left-pads a `number` with zeros to match `minDigits` minimum digits
 */
function formatNumber(number:number, minDigits:number):string {
    let r = ""+number;
    while (r.length < minDigits) { r = "0" + r; }
    return r;
}


/**
 * @ngdoc method 
 * @name ()
 * @methodOf hsNode.date
 * @param {String} formatString the format string to use.
 * @param {Date=} [date=new Date()] the date to format.
 * @returns {String} a copy of `formatString` where all supported patterns are replaced by the respective values from `date`.
 */
export default (formatString:string, date=new Date()) => formatString
	.replace(/%YYYY/g,	''+date.getFullYear())
	.replace(/%YY/g,  	''+(date.getFullYear()%100))
	.replace(/%MMMM/g,  monthStr[date.getMonth()][1])
	.replace(/%MMM/g,  	monthStr[date.getMonth()][0])
	.replace(/%MM/g,  	formatNumber(date.getMonth()+1,2))
	.replace(/%M/g,  	''+(date.getMonth()+1))
	.replace(/%DDDD/g, 	dayStr[date.getDay()][1])
	.replace(/%DDD/g,  	dayStr[date.getDay()][0])
	.replace(/%DD/g,  	formatNumber(date.getDate(),2))
	.replace(/%D/g,  	''+date.getDate())
	.replace(/%hh/g,  	formatNumber(date.getHours(),2))
	.replace(/%h/g, 	''+date.getHours())
	.replace(/%mm/g,  	formatNumber(date.getMinutes(),2))
	.replace(/%m/g,  	''+date.getMinutes())
	.replace(/%ss/g,  	formatNumber(date.getSeconds(),2))
	.replace(/%jjj/g,  	formatNumber(date.getMilliseconds(),3))
	.replace(/%jj/g,  	formatNumber(date.getMilliseconds()/10,2))
	.replace(/%j/g,		formatNumber(date.getMilliseconds()/100,1))
;

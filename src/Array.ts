/**
 * Array extensions.
 * 
 * ## 
 */

/**
 * takes an `array` of elements of object literal type `<T>`, then sorts out any duplicate elements 
 * with respect to a `key`. If `key` is `undefined`, 
 * ### Example: object literals of type `<T>`
 * ```
 * const Values = [
 *    {id: 1, b: 'first element'},
 *    {id: 2, b: 'second element'},
 *    {id: 3, b: 'third element'},
 *    {id: 1, b: 'first element'},
 * ];
 * 
 * const u = uniquefy(Values, 'id');
 * //=> [{id: 1, b: 'first element'}, {id: 2, b: 'second element'}, {id: 3, b: 'third element'}]
 * 
 * ### Example: array of `string` or `number`
 * ```
 * const Values = [0, 1, 2, 0, 3, 2, 4];
 * 
 * const u = uniquefy(Values);
 * //=> [0, 1, 2, 3, 4]
 * ```
 * @param array an array of elements of type `T`, some of which may be duplicates.
 * @param key the field in the element object to use as key. `T[key]` must be a `string` or `number`.
 * @return an array containing only unique elements of the original `array`
 */
export function uniquefy<T>(array:T[], key?:number|string):T[] {
    const unique: {[key:string]: boolean} = {};
    return key? array.filter(t => unique[t[''+key]]? false : (unique[t[''+key]]=true))
              : array.filter(t => unique[''+t]? false : (unique[''+t]=true));
}
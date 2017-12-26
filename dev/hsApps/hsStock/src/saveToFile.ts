
import { m }            from 'hslayout';

const SAVE_URL          = '/cgi/save.js';

export function save(data:any, fname:string):Promise<any> {
    return m.request({
        method: 'PUT',
        url: `${SAVE_URL}?name=${fname}`,   // fname relative to 'apps/
        data: data
    })
    .then(() => data)                       // send `data` into next `then`
    .catch((err:any) => {
        console.log(`error saving to ${fname}`);
        console.log(err);
        console.log(err.stack);
        return data;
    });
}
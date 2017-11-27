import { m }            from 'hslayout';
import { EquityList }   from '../controller/Equity';

export function tabTrade(list:EquityList, symbol:string) {
    return m('.hs-left-nav', 'Trade...');
}

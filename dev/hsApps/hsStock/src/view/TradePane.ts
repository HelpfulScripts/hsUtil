import { m }            from 'hslayout';
import { EquityList }   from './Equity';

export function tabTrade(list:EquityList, symbol:string) {
    return m('.hs-left-nav', 'Trade...');
}

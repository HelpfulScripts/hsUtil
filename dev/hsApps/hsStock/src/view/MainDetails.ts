import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { EquityItem }   from '../controller/Equity';
import { gEquityList }  from '../Site';
import { date, round }  from 'hsutil'; 

const format = (n:number):string => {
    let result = ''+n;
    const limits =  [1000000000, 1000000, 1000, 1, 0.001, 0.000001, 0.000000001];
    const postfix = ['bn',       'mio',   'k',  '',  'm',     'µ',        'n'];

    limits.some((v:number, i:number) => {
        if (n>v) { 
            result = Math.round(n/v*10)/10+postfix[i];
            return true;
        }
        return false;
    });
    return result;
};
export class MainDetails extends Layout {
    getComponents(node: Vnode): Vnode {
        let symbol:string;
        let list = gEquityList;
        if (node.attrs && node.attrs.route) {
            symbol = node.attrs.route.symbol;
        }
        const item:EquityItem = list.getItem(symbol);
        const s = item.stats || {};
        const divDate = s.exDividendDate? date('%MM/%D/%YY', new Date(s.exDividendDate.replace(' ','T'))) : '';
        const close = item.otherStats? item.otherStats.close : 0;
        const pe = s.peRatio || round(close / s.latestEPS, 3);
        return m(Layout, {
            css: '.hs-equity-detail',
            rows: ['30px', '80px'],
            content: [
                m(Layout, {
                    columns:['fill', '30%'],
                    content: [
                        m('.hs-equity-name', item.name),
                        m(Layout, {
                            columns: [],
                            content: [
                                m('.hs-equity-symbol', item.symbol),
                                m('.hs-equity-close', `$${close}`)
                            ]
                        })
                    ]
                }),
                m(Layout, {
                    css: '.hs-equity-detail-column',
                    columns:['fill', '30%'],
                    content: [
                        m('', [ 
                            m('.hs-equity-cat', `${item.cat}: ${item.company.sector}`),
                            m('.hs-equity-cat', item.company.primaryExchange),
                            m('.hs-equity-cat', `${item.quotes?item.quotes.getData().length:0} quotes`)
                        ]),
                        m(Layout, {
                            columns:[],
                            content: [
                                m('', [ 
                                    m('.hs-equity-cat', 'Market Cap'),
                                    m('.hs-equity-cat', 'Revenue:'),
                                    m('.hs-equity-cat', 'Profits:'),
                                    m('.hs-equity-cat', 'Cash:')
                                ]),
                                m('', [ 
                                    m('.hs-equity-cat .hs-align-right', `$${format(s.marketCap)}`),
                                    m('.hs-equity-cat .hs-align-right', `$${format(s.revenue)}`),
                                    m('.hs-equity-cat .hs-align-right', `$${format(s.EBITDA)}`),
                                    m('.hs-equity-cat .hs-align-right', `$${format(s.cash)}`)
                                ])
                            ]
                        }),
                        m(Layout, {
                            columns:[],
                            content: [
                                m('', [ 
                                    m('.hs-equity-cat', 'PE:'),
                                    m('.hs-equity-cat', '52 week high:'),
                                    m('.hs-equity-cat', '52 week low:')
                                ]),
                                m('', [ 
                                    m('.hs-equity-cat .hs-align-right', `${pe || '--'}`),
                                    m('.hs-equity-cat .hs-align-right', `$${s.week52high || '--'}`),
                                    m('.hs-equity-cat .hs-align-right', `$${s.week52low || '--'}`)
                                ])
                            ]
                        }),
                        m('', [ 
                            m('.hs-equity-cat', (s.dividendRate===undefined)? 'Dividend: 0' : `Dividend ${divDate}: $${s.dividendRate}, ${round(s.dividendYield,3)}%`),
                            m('.hs-equity-cat', `EPS ${date('%MM/%D/%YY', new Date(s.latestEPSDate||0))}: $${s.latestEPS || '--'}`)                            
                        ])
                    ]
                })
            ]
        });
    }     
} 


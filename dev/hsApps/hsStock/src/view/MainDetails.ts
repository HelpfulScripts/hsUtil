import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { gEquityList,
         EquityItem }   from '../controller/Equity';
import { date, round }  from 'hsutil'; 

const format = (n:number):string => {
    let result = ''+n;
    const limits =  [1000000000, 1000000, 1000, 1, 0.001, 0.000001, 0.000000001];
    const postfix = [' B',       ' M',    ' k', '', ' m',     ' µ',        ' n'];

    limits.some((v:number, i:number) => {
        if (n>v) { 
            result = Math.round(n/v*10)/10+postfix[i];
            return true;
        }
        return false;
    });
    return result;
};

/**
 * ## 
 */
export class CycleThrough {
    static state = {};
    static create(key:string, ...args:string[]) {
        return new CycleThrough(key, args);
    }
    key:string;
    args: string[];
    private constructor(key:string, args:string[]) {
        this.active = args[1]!==undefined;
        this.key    = key;
        this.args   = args;
    }

    public active:boolean;
    public next = () => !this.active? '' : (CycleThrough.state[this.key] = ((CycleThrough.state[this.key] || 0)+1) % this.args.length);
    public get val() { return this.args[CycleThrough.state[this.key] || 0]; }
}


export class MainDetails extends Layout { 
    getComponents(node: Vnode): Vnode {
        const symbol  = m.route.param('symbol');
        const item:EquityItem = gEquityList.getItem(symbol);
//        const numQuotes = (item.quotes)?item.quotes.rows.length:0;
        const s = item.stats || {};
        const c =item.company || {};
        const divDate = (s.dividendRate && s.exDividendDate)? date('%MM/%D/%YY', new Date(s.exDividendDate)) : '';
        const pe = s.peRatio || round((s.latestPrice || 0) / s.latestEPS, 3);
        const latestDate = date('%MM/%DD/%YY: ', new Date(s.latestDate));
        const latestEPSDate = date('%MM/%D/%YY', new Date(s.latestEPSDate||0));
        const latestEPS     = s.latestEPS? `$${s.latestEPS}`: '--';
        const latestEPSRate = s.latestEPS? `${round(100*s.latestEPS/s.latestPrice,3)}%`: '--';
        const week52high    = s.week52high? `$${s.week52high}` : '--';
        const week52hgRatio = s.week52high? `${round(100*s.week52high/s.latestPrice,3)}%`: '--';
        const week52low     = s.week52low? `$${s.week52low}` : '--';
        const week52lwRatio = s.week52low? `${round(100*s.week52low/s.latestPrice,3)}%`: '--';
        const cols = [{ 
            css:'', 
            fields: [
                [`${item.cat}:`,                        c.sector],
                ['Exchange:',                           c.primaryExchange],
                ['Current Shares:',                     item.shares, `$${format(item.shares*(s.latestPrice || 0))}`]
        ]},{ 
            css:'', 
            fields: [
                ['Market Cap',                          `$${format(s.marketCap)}`],
                ['Revenue:',                            `$${format(s.revenue)}`],
                ['Profits:',                            `$${format(s.EBITDA)}`],
                ['Cash:',                               `$${format(s.cash)}`]
        ]},{ 
            css:'', 
            fields: [
                ['PE:',                                 `${pe || '--'}`],
                ['52 wk high:',                         week52high, week52hgRatio],
                ['52 wk low:',                          week52low,  week52lwRatio],
                ['Volume (shares):',                    `${format(s.latestVolume) || '--'}`]
        ]},{ 
            css:'.hs-equity-right-column', 
            fields: [
                [`Dividend ${divDate}:`,    `$${s.dividendRate}`,  `${round(s.dividendYield,3)}%`],
                [`EPS ${latestEPSDate}:`,   latestEPS, latestEPSRate]
        ]}];
        const change = CycleThrough.create('change', `$${s.change}`, `${round(100*s.change/s.latestPrice,3)}%`, 'hehe');
        return m(Layout, {
            css: '.hs-equity-detail',
            rows: ['30px', '80px'],
            content: [
                m(Layout, {
                    columns:['fill', '250px'],
                    content: [
                        m('span.hs-equity', [
                            m('span.hs-equity-name', item.name),
                            m('span.hs-equity-symbol', item.symbol)
                        ]),
                        m('span.hs-equity .hs-align-right', [
                            m('span', `${latestDate}`),
                            m('span.hs-equity-close', `$${s.latestPrice || 0}`),
                            m(`span.hs-equity-change ${s.change<0? '.hs-negative': '.hs-positive'} ${change.active?'.hs-link':''}`, {onclick: change.next}, `${change.val}`)
                        ])
                    ]
                }),
                m(Layout, {
                    css: '.hs-equity-detail-column',
                    columns:[],
                    content: cols.map((c:any, col:number) => m(Layout, {
                        columns:[],
                        content: [
                            m('', c.fields.map((e:[string, string]) => m('.hs-equity-cat', e[0]))),
                            m('', c.fields.map((e:[string, string], idx:number) => {
                                const t = CycleThrough.create(`${col}${idx}`, e[1], e[2]);
                                return m(`.hs-equity-cat .hs-align-right ${t.active?'.hs-link':''} ${c.css}`, {onclick: t.next}, t.val);
                            })) 
                        ]
                    }))
                })
            ]
        });
    }     
} 


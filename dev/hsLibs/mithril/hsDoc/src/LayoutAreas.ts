import {Component} from './view/Layout';

export abstract class LayoutArea {
    constructor(public size: number) {}
}

abstract class DefinedArea extends LayoutArea{
    constructor(size: number) { super(size); } 
}

class PixelArea extends DefinedArea {
    constructor(size:number) { super(size); }
}

class PercentArea extends DefinedArea {
    constructor(size:number) { super(size); }
}

class FillArea extends LayoutArea {
    constructor() { super(-1); }
}

export function px(px:number)   { return new PixelArea(px); }
export function pc(pc:number)   { return new PercentArea(pc); }
export const FILL = new FillArea();


class LayoutDescriptor {
    firstFixed: number;
    lastFixed:  number;
    unit: string;

    constructor(public areaDesc:LayoutArea[]) { 
    }

    public getSizes(numAreas:number) {
        
    }
}


const cParams = {
    columns: {
        cssClass: '.hs-column-layout',
        fields: ['top', 'bottom', 'left', 'right', 'height', 'width']
    },
    rows: {
        cssClass: '.hs-row-layout',
        fields: ['left', 'right', 'top', 'bottom', 'width', 'height']
    }
};

type styleType = { (): string[]; cssClass: string; };
type unitParams = {areas:Component[], firstDefined:number, lastDefined:number};





abstract class Areas {
    spacing = 0;    
    constructor(public paramName:string, public areaDesc:any[]) { };

    styles(areas:Component[]) {
        this.getStyles(areas);
        return cParams[this.paramName].cssClass;
    }
    protected abstract getStyles(areas:Component[]):void;
}

class Pillars extends Areas{
    firstFixed: number; // number of DefinedArea entries at the beginning
    lastFixed:  number; // number of DefinedArea entries at the end
    unit:(num:number)=>any[];
    fields: string[];

    constructor(paramName:string, areaDesc:LayoutArea[]) { 
        super(paramName, areaDesc); 
        this.fields = cParams[paramName].fields;

console.log('\n');        
console.log(areaDesc);        
        let n = areaDesc.length-1;
        let first = 0;
        let last  = 0;        
        // if any of the dimensions are in px, use the pixel method; else use the percent method
        // get index of first and last undefined area, if any            
        this.unit = areaDesc.some((area:LayoutArea) => (area instanceof PixelArea))? this.unitPixel : this.unitPercent;        // true if any area is PixelArea
        areaDesc.some((area:LayoutArea, i:number) => ((areaDesc[i]   instanceof DefinedArea)? ++first<0 : true)); // first = number of consecutive fixed fields at start
        areaDesc.some((area:LayoutArea, i:number) => ((areaDesc[n-i] instanceof DefinedArea)? ++last<0  : true)); // last  = number of consecutive fixed fields at end

        this.firstFixed = first;
        this.lastFixed  = Math.min(last, areaDesc.length-first);
console.log(`${first} ${last}`);        
    };

    // num: number of areas to layout
    private getSizes(num:number) {
        const first = this.firstFixed;
        const last  = this.lastFixed;
        const desc  = this.areaDesc;
        const len = desc.length;
        function getSize(i:number):{size:number, code:string, fields:{}} {
            let size:number = null;
            let t = null;
            if (i > num-1-last)  { size = desc[len - (num-i)].size; t = 'end'; }   // end sequence
            else if (i < first)  { size = desc[i].size; t = 'start'; }             // start sequence
            return {size:size, code:t, fields:{}};
        } 
        return [...Array(num).keys()].map(getSize);
    }

    private unitPercent(num:number):any[] {
        let f = this.fields;
        let max = 100.0;
console.log(`percent ${this.firstFixed} ${this.lastFixed}`);
console.log(this.areaDesc);
        let defDim = max / num;      // divvy up remaining space
        let styles = this.getSizes(num);
console.log(styles);
 
console.log(`max:${max}, num:${num}`);        
        styles.forEach(style => { if (style.size) { max = max - style.size; num--; } });
console.log(`max:${max}, num:${num}`);        
console.log(styles);        

        function pass(styles:any[], ix0:number, ix1:number, breakCond:(cond:string)=>boolean) {
            let sumDim = 0;
            styles.some(style => {
                let size = style.size || defDim;
                if (breakCond(style.code)) { return true; }
                style.fields[f[ix0]] = sumDim+'%';
                sumDim += size;
                style.fields[f[ix1]] = (100-sumDim)+'%'; 
                style.fields[f[5]] = 'auto';
                return false;
            });
        }

        pass(styles, 2, 3, (e:string) => e==='end');              // forward pass
        pass(styles.reverse(), 3, 2, (e:string) => e!=='end');    // backward pass
        return styles.reverse();    // reverse a second time for original sequence.
    };

    private unitPixel(num:number):any[] { // pattern: [px, px, FILL , px, px]
        let styles = this.getSizes(num);
        let f = this.fields;
console.log('pixel');
console.log(styles);
       
        let defDim = 100.0/num;          // used for unspecified widths

        // work forwards through the heights
        let sumDim = 0;
        styles.some((style, i) => {
            if (style.code==='start') {   // so far, all heights explicitly set as px
console.log([i, style.size, style.code, sumDim]);         
                style.fields[f[2]] = sumDim +'px';
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[3]] = 'auto';
                style.fields[f[5]] = style.size +'px';
console.log(style);
            } else if (style.code === null) {
console.log([i, style.size, style.code, sumDim]);  
                style.fields[f[2]] = (sumDim>0)? (sumDim +'px') : (i*defDim + '%');
                sumDim = -1;
                style.fields[f[3]] = (100-(i+1)*defDim) + '%';
                style.fields[f[5]] = 'auto';
console.log(style);
            } else if (style.code==='end') { return true; }
            return false;
        });
        
        // work backwards through the heights
        sumDim = 0;
        styles.slice().reverse().some((style, i) => {
//            let [size, exact] = getSize(i, num, params, this.areaDesc);
            style.fields[f[3]] = sumDim + 'px';
            if (style.code === 'end') { 
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[2]] = 'auto';
                style.fields[f[5]] = style.size+'px';
            } else {
                if (sumDim>0 && style.code !== 'start') {
                    style.fields[f[5]] = 'auto';
                }
                return true; 
            } 
            return false;
        });  
       
        return styles;
    };
    
    protected getStyles(areas:Component[])  { 
        let f = this.fields;
        let styles = this.unit(areas.length);
console.log('getStyles:');
console.log(styles);

        areas.map((area:any, i:number) => {
            area.style = `${f[0]}:0%; ${f[1]}:0%; `;
            Object.keys(styles[i].fields).forEach((style:string) => { area.style += `${style}: ${styles[i].fields[style]};`; });
        });     
    };
};

export class Columns extends Pillars {
    constructor(areaDesc:LayoutArea[]) { super('columns', areaDesc);  };
};


export class Rows extends Pillars {
    constructor(areaDesc:LayoutArea[]) { super('rows', areaDesc);  };
};
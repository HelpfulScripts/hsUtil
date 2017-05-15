import {Component} from './view/Layout';

export abstract class LayoutArea {
    constructor(public type: string, public areaSize: number) {}
}

abstract class DefinedArea extends LayoutArea{
    constructor(public type: string, public areaSize: number) { super(type, areaSize); }
}

class PixelArea extends DefinedArea {
    constructor(size:number) { super('Pixel', size); }
}

class PercentArea extends DefinedArea {
    constructor(size:number) { super('Percent', size); }
}

class FillArea extends LayoutArea {
    constructor() { super('Fill', -1); }
}

export function px(px:number)   { return new PixelArea(px); }
export function pc(pc:number)   { return new PercentArea(pc); }
export const FILL = new FillArea();




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
    constructor(public paramName:string, public areaDesc:any) { };

    styles(areas:Component[]) {
        this.getStyles(areas);
/*        
        this.getStyles(areas).forEach((style:string, i:number) => {
            (<any>areas[i]).style = style;
        });
*/  
        return cParams[this.paramName].cssClass;
    }
    protected abstract getStyles(areas:Component[]):void;
}

class Pillars extends Areas{
    constructor(paramName:string, areaDesc:LayoutArea[]) { super(paramName, areaDesc); };

    private getSize(i:number, num:number, params:unitParams) {
        let sizes = this.areaDesc;
        let size:any = null;
        let t = '';
        if (sizes.length === 0)                 { }
        else if (sizes.length === 1)            { size = sizes[0].areaSize; t = 'all'; }
        else if (i<=params.firstDefined)        { size = sizes[i].areaSize; t = 'start'; }
        else if (num-i-1 < params.lastDefined)  { size = sizes[sizes.length-(num-i)].areaSize; t = 'end'; }
        return [size, t];
    } 

    private unitPercent(params:unitParams, fields:string[]):any[] {
        let max = 100.0;
        let num = params.areas.length;
console.log('percent');
        let defDim = max / num;      // divvy up remaining space
        let styles:any[] = [];
 
        params.areas.forEach((area, i) => {
            styles[i] = {};
            let [size, exact] = this.getSize(i, num, params);
            if (exact) { max = max - size; num--; }
        });

        function pass(areas:Component[], styles:any[], idx0:number, idx1:number, breakCond:(cond:string)=>boolean) {
            let sumDim = 0;
            areas.some((area, i) => {
                let [size, exact] = this.getSize(i, num, params);
                if (breakCond(exact)) { return true; }
                if (size===null) { size = defDim; };
                styles[i][fields[idx0]] = sumDim+'%';
                sumDim += size;
                styles[i][fields[idx1]] = (100-sumDim)+'%'; 
                styles[i][fields[5]] = 'auto';
                return false;
            });
        }

        pass(params.areas, styles, 2, 3, (e:string) => e==='end');                      // forward pass
        pass(params.areas.slice().reverse(), styles, 3, 2, (e:string) => e!=='end');    // backward pass
        return styles;
    };

    private unitPixel(params:unitParams, fields:string[]):any[] { // pattern: [px, px, FILL , px, px]
        let styles:any[] = [];
console.log('pixel');
       
        let num = params.areas.length;
        let defDim = 100.0/num;          // used for unspecified widths
        params.areas.forEach((area, i) => styles[i] = {});

        // work forwards through the heights
        let sumDim = 0;
        params.areas.forEach((area, i) => {
            let [size, exact] = this.getSize(i, num, params);
            if (exact==='start' || exact==='all') {   // so far, all heights explicitly set as px
if (num===3) { console.log([i, size, exact, sumDim]); }           
                styles[i][fields[2]] = sumDim +'px';
                sumDim += size + (this.spacing || 0) + (this.spacing || 0);
                styles[i][fields[3]] = 'auto';
                styles[i][fields[5]] = size +'px';
if (num===3) { console.log(styles[i]); }
            } else if (exact === '') {
if (num===3) { console.log([i, size, exact, sumDim]); }      
                styles[i][fields[2]] = (sumDim>0)? (sumDim +'px') : (i*defDim + '%');
                sumDim = -1;
                styles[i][fields[3]] = (100-(i+1)*defDim) + '%';
                styles[i][fields[5]] = 'auto';
if (num===3) { console.log(styles[i]); }
            } else if (exact==='end') { return true; }
            return false;
        });
        
        // work backwards through the heights
        sumDim = 0;
        params.areas.slice().reverse().some((area, i) => {
            let [size, exact] = this.getSize(i, num, params);
            styles[i][fields[3]] = sumDim + 'px';
            if (exact === 'end') { 
                sumDim += size + (this.spacing || 0) + (this.spacing || 0);
                styles[i][fields[2]] = 'auto';
                styles[i][fields[5]] = size+'px';
            } else {
                if (sumDim>0 && exact !== 'start') {
                    styles[i][fields[5]] = 'auto';
                }
                return true; 
            } 
            return false;
        });  
       
        return styles;
    };
    
    protected getStyles(areas:Component[])  { 
        let fields = cParams[this.paramName].fields;
        let unit = this.unitPercent;
        let firstDefined = -1;
        let lastDefined = 0;
        // if any of the dimensions are in px, use the pixel method; else use the percent method
        // get index of first and last defined area
        this.areaDesc.forEach((area:LayoutArea, i:number) => {
            unit = (area instanceof PixelArea)? this.unitPixel : unit;
            if (area instanceof DefinedArea) {
                if (firstDefined<0) { firstDefined = i; };
                lastDefined = i;     
            }
        });
        let styles = unit.apply(this, [{areas: areas, firstDefined:firstDefined, lastDefined:lastDefined}, fields]);

        areas.map((area:any, i:number) => {
            area.style = `${fields[0]}:0%; ${fields[1]}:0%; `;
            Object.keys(styles[i]).forEach((style:string) => { (<any>area).style += `${style}: ${styles[i][style]};`; });
//            return `${f[0]}:0; ${f[1]}:0; ${f[2]}:${i*100/num}%; ${f[3]}:${(num-i-1)*100/num}%; ${f[5]}:auto;`;
        });     
    };
};

export class Columns extends Pillars {
    constructor(areaDesc:LayoutArea[]) { super('columns', areaDesc);  };
};


export class Rows extends Pillars {
    constructor(areaDesc:LayoutArea[]) { super('rows', areaDesc);  };
};
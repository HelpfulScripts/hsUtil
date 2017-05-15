
/**
 * parses a dim string and returns:
 * 
 */
export default function parseDims(dim:string) {
    dim = dim || '[]';
    let unit = dim.indexOf('px')>0? "px":"%";
    
    dim = dim.replace(/,,/g, ',"",')        // empty fields by empty quotes
                .replace('[,', '["",').replace(',]', ',""]')
                .replace(/("",){2,}/g, '"",')   // 2 or more empty quotes in sequence
                .replace(/%/g,'').replace(/px/g,'');        
    let dims = JSON.parse(dim).map((d:string) => parseFloat(d)) ;
    dims.unit = unit;
    
    dims.firstDefined = 0;
    dims.lastDefined  = 0;
    for (const d of dims) { 
        if (isNaN(d)) { break; } else { dims.firstDefined++; }
    }
    for (const d of dims.slice().reverse()) { 
        if (isNaN(d)) { break; } else { dims.lastDefined++; }
    }
    dims.lastDefined = Math.min(dims.lastDefined, dims.length-dims.firstDefined);
    return dims;
}
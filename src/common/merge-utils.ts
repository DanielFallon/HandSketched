/**
 * Map the decomposers over the
 * @param decomposers
 * @param objects
 * @returns {undefined|any}:
 */
export function merge(mergeFunctions: any[], ...objects: any[]):any {
    mergeFunctions.forEach(func => shallowMerge(objects.map(func)));
    return objects.shift();
}

export function shallowMerge(composer: any, ...items:any[]):any {
    items.map(composer)
}

function setPrototype(cur: any, rest: any[]) {
    if (rest.length > 0) {
        let next = cur.prototype = rest.shift();
        setPrototype(next, rest);
    }
}

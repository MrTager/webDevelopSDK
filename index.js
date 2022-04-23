
/**
 * 获取深层次对象值，避免异常
 * @param {*} source 
 * @param {*} path 
 * @param {*} defaultValue 
 * @returns 
 * 
 * 
 *  console.log(get({ a: null }, "a.b.c", 3)); // output: 3
    console.log(get({ a: undefined }, "a", 3)); // output: 3
    console.log(get({ a: null }, "a", 3)); // output: 3
    console.log(get({ a: [{ b: 1 }] }, "a[0].b", 3)); // output: 1
 * 
 * 
 */
export function deepObjectGet(source, path, defaultValue = undefined){
    const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
    let result = source;
    for (const p of paths) {
      result = Object(result)[p];
      if (result == undefined) {
        return defaultValue;
      }
    }
    return result;
}

export default{
    deepObjectGet
}
function solution(sizes) {
    let wid = [];
    let len = [];
    let arr = sizes.map(size => size[0] > size[1] ? [size[0],size[1]] : [size[1],size[0]]);
    for ( let i = 0; i < sizes.length; i ++ ) {
        wid.push(arr[i][0]);
        len.push(arr[i][1]);
    }
    return Math.max(...wid) * Math.max(...len);
}
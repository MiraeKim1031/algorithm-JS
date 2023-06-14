function solution(num_list) {
    var answer = [];
    let count = 0;
    for (let i = 0; i < num_list.length; i ++) {
        if(num_list[i] % 2 === 0) {
            count ++;
        }
    }
    return [count, num_list.length-count];
}

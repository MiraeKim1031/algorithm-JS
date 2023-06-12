function solution(array1) {
    var array2 = array1.sort((a, b) => a - b);
    var answer = array2[Math.floor(array2.length/2)]
    return answer;
}

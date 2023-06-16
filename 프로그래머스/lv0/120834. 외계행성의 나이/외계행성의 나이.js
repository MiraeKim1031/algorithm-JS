function solution(age) {
    var answer = [];
    var char = 'abcdefghijklmnopqrstuvxwyz'.split('');
    for ( let i = 0; i < String(age).split('').length; i ++ ) {
        answer.push(char[String(age).split('')[i]]).join
    }
    return answer.join('');
}

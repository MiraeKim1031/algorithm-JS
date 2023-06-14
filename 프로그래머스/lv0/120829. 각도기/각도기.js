function solution(angle) {
    var answer = 0;
    if (angle < 90) {
        return answer = 1;
    } else if (angle == 90) {
        return answer = 2;
    } else if (angle < 180) {
        return answer = 3;
    } else {
        return answer = 4;
    }
}
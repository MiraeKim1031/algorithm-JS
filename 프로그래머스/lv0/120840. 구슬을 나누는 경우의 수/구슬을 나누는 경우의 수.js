function solution(balls, share) {
    return factorial(balls) / (factorial((balls-share)) * factorial(share))
}

// 팩토리얼을 구하는 함수

function factorial(num) {
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}
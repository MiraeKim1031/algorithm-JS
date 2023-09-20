function solution(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    }
    return numbers
}

//shift: 배열의 가장 첫 번째 원소를 제거하고 제거된 요소를 반환
//pop: 배열의 가장 마지막 원소를 제거하고 제거된 요소를 반환

//unshift: 배열의 앞쪽에 데이터를 삽입하고 삽입된 배열의 길이를 반환
//push: 배열의 뒷쪽에 데이터를 삽입하고 삽입된 배열의 길이를 반환
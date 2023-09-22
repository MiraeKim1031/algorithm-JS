function solution(my_string) {
    const regex = /[^0-9]/g;
    const result = my_string.replace(regex, "").split('').sort((a,b) => a-b);
    return result.map(Number);
}

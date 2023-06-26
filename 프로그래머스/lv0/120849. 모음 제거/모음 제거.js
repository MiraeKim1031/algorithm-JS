function solution(my_string) {
    const vowels = 'aeiou'
    return my_string.split("").filter((ele) =>(!vowels.includes(ele))).join("")
}

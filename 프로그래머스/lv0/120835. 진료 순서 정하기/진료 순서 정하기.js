function solution(emergency) {
    let sortedArray = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sortedArray.indexOf(v)+1);
}
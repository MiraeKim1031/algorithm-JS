function solution(name, yearning, photo) {
    var answer = [];
    const score = name.reduce((acc, curr, idx) => {
        return { ...acc, [curr]: yearning[idx]};
    }, new Object);
    
    return photo.map((arr) => arr.reduce((acc,cur) => acc + (score[cur] || 0), 0));
}

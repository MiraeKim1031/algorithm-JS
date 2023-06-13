function solution(price) {
    price = price
    if (price <= 99999) {
        price = price }
    else if (price <= 299999) {
        price = price * 0.95}
    else if (price <= 499999) {
price = price * 0.9 }
    else {
price = price * 0.8}

return Math.floor(price) }
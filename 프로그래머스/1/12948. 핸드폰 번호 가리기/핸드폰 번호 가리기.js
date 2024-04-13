function solution(phone_number) {
    let str = phone_number.slice(0, -4)
    let star = '*'.repeat(str.length)
    return phone_number.replace(str, star)
}
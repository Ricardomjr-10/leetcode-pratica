const l1 = [9,9,9,9,9,9,9]
const l2 = [9,9,9,9]

const somaDois = (l1, l2) => {
    let numberl1 = ''
    let numberl2 = ''
    for (let i = 0; i < l2.length; i++) {
    numberl1 += l1[l1.length -1 - i]
    numberl2 += l2[l2.length -1 - i]
    }
    let res = Number(numberl1) + Number(numberl2)
    return res.toString().split('').reverse().join()
}

console.log(somaDois(l1, l2))
console.log(typeof(numberl1= {}))
console.log(typeof(numberl2 = {a:'a'}), numberl2)


const returnMedia = array => {
    const media = array.reduce((acc,number,_,array) => {
        acc += number / array.length
        return acc 
    }, 0)
    return media
}

const numbers = [10,2,3,4,5]

console.log(returnMedia(numbers))
const returnMaior = array => {
    let maior = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

console.log(returnMaior(numbers))

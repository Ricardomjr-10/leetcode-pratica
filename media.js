
const returnMedia = array => {
    const media = array.reduce((acc,number,_,array) => {
        acc += number / array.length
        return acc 
    }, 0)
    return media
}

const numbers = [10,2,3,4,5]



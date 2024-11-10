
const includesPrefix = strs => {
    if (!strs.length) return ''; // Caso a matriz esteja vazia, não há prefixo

    let prefix = strs[0]; // Iniciamos com a primeira string como prefixo
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Enquanto a string atual não começar com o prefixo atual, encurtamos o prefixo
            prefix = prefix.slice(0, -1);
            if (!prefix) return ''; // Se o prefixo ficar vazio, não há prefixo comum
        }
    }
    return prefix;
}

const strs = ["flower","flow","flight"]
const strs1 = ["doge","cogcarge","cogarge"]
console.log(includesPrefix(strs1))

console.log(strs[0].slice(0,-1))
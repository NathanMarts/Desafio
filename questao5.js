function inverterString(str) {
    let arr = [];
    
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        let temp = str[i];
        arr[i] = str[j];
        arr[j] = temp;
    }
    
    return arr.join("");
}

var str = "aaaabbbbccccddddd"

console.log(inverterString(str))

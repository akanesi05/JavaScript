配列.push(追加する要素)
[1, 2, 3].push(4)
['りんご', 'みかん'].push('ぶどう')

//unshiftメソッドを呼び出すと、配列の先頭に要素を追加する
const numbers = [1, 2, 3]
const newLength = numbers.unshift(10) // newLengthは4
console.log(numbers) // [10, 1, 2, 3]
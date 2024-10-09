配列.push(追加する要素)
[1, 2, 3].push(4)
['りんご', 'みかん'].push('ぶどう')

//unshiftメソッドを呼び出すと、配列の先頭に要素を追加する
const numbers = [1, 2, 3]
const newLength = numbers.unshift(10) // newLengthは4
console.log(numbers) // [10, 1, 2, 3]

//shiftメソッドを呼び出した配列の先頭の要素を取り出します
//forEachメソッドは、配列の各要素に対して順番に処理を行います。
numbers.forEach((number, index) => {
    console.log(index)
  })

const prefectures = ['愛知', '福岡', '沖縄']
prefectures.forEach((prefecture) => {
  console.log(prefecture)
  
})
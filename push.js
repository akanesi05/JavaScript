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
//mapメソッドは呼び出し元の配列の各要素に対して処理を行い、新しい配列を作ります。

//コールバック関数は他の関数に引数として渡される関数 関数runTwiceの引数に関数greetを渡す
const greet = () => {
    console.log('Hello world!')
  }
  
  const runTwice = (func) => {
    func()
    func()
  }
  
  runTwice(greet) 

const sampleUrl = 'https://jsonplaceholder.typicode.com/users'
const sample = fetch(sampleUrl) // ユーザーの一覧情報を含むデータを取得
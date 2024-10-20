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


  const getUsersUrl = 'https://jsonplaceholder.typicode.com/users'
  const response = fetch(getUsersUrl)
  console.log(response)

const prices = [1000, 2000, 3000, 4000]
const found = prices.find((price) => price >= 2500)
console.log(found) // 3000
const array = [4, 9, 13, 20, 25]
console.log(array.find((value) => value < 5))
console.log([1000, 2000, 3000, 4000].indexOf(1000)) // 0
const tastes = ['醤油', '塩', '豚骨', '味噌']
console.log(tastes.includes('塩'))
const greeting2 = ['おはよう', 'こんにちは', 'ありがとう']
const includesArray = (array) => {
  return array.includes('ありがとう')
}
console.log(includesArray(greeting2))

// const getUsersUrl = 'https://jsonplaceholder.typicode.com/users'
// const response = fetch(getUsersUrl)
console.log(response)
const myName = 'Mike'
console.log(`私の名前は${myName}です`) // 私の名前はMikeです
const url = 'https://jsonplaceholder.typicode.com/users/1'

const getUser = async () => {
  // 2秒待機する
  await new Promise(resolve => setTimeout(resolve, 2000))
  // ユーザの情報を取得してuserDataに格納する
  const response = await fetch(url)
  const userData = await response.json()
  console.log(userData)
}

const sampleFunction = async () => {
  getUser()
  console.log('情報を取得しました')
}

sampleFunction()
const getPostUrl = 'https://jsonplaceholder.typicode.com/posts'
const getPostList = async () => {
  // ここから
  const response = await fetch(getPostUrl)
  const postList = await response.json()
  console.log(postList)
  // ここまで
}
// 2桁の数字を表す正規表現
const regexp = new RegExp('[0-9]{2}')
// ひらがなもしくは小文字のアルファベット3文字から4文字を表す正規表現
const regexp2 = new RegExp('[ぁ-んa-z]{3,4}')
// 090-1234-5678のような携帯の電話番号を表す正規表現
const regexp3 = new RegExp('[0-9]{3}-[0-9]{4}-[0-9]{4}')
// 2つの小文字のアルファベットからなる文字列をグローバルに検索する正規表現
const regexp4 = new RegExp('[a-z]{2}', 'g')


fruits = ['apple', 'orange', 'banana'];
console.log(fruits);
fruits.push('strawberry');
console.log(fruits);
//["apple", "orange", "banana", "strawberry"]

// fruits = ['apple', 'orange', 'banana'];
// console.log(fruits);
// fruits.pop(fruits);
// console.log(fruits);
// const prices = [1000, 2000, 3000, 4000]
// const newprices = prices.slice(1,-2) // 0番目から4つ目を切り抜く
// // (第2引数は省略可能)
// console.log(newprices) // [1000]
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number);
// });
//このコードでは、配列numbersの各要素を順番に取り出し、それぞれをnumberという変数に格納してから、console.logによって出力します。出力結果は以下の通りです。

setTimeout(() => {
  console.log("５秒立ちました") 
} ,5000) // よばれて５秒後にconsoleにメッセージが出力される

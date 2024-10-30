// let count = 1
// const double = () => count*2
// console.log(double)
//上記の関数を純粋関数にしてください。
const double = (count) => count * 2;

// const num = 4
// const array = [1,2,3]
// array.push(num)
// console.log(array)

// 上記の処理を非破壊的にしてください
newArray = [1,2,3,num]
console.log(newArray)

//自分の回答
newArray = [...array,num]
console.log(newArray)


// const nums = [4,5,6]
// const array = [1,2,3]

// for(num of nums){
//   array.push(num)
// }
// console.log(array)

// 上記の処理を非破壊的にしてください
newArray = [1,2,3, ...nums]
console.log(newArray)

// const array = [1, 2, 3, 4];
// const newArray = array.slice(0, 3);

console.log(newArray); // 結果: [1, 2, 3]

// const array = [ 1, 2, 3, 4 ]
// array.shift()

const array = [ 1, 2, 3, 4 ]
array.slice(1,4)
var str = "result"
var length = 6
var bool = false
if(str.length === length) {
  bool = true
}
console.log(bool)

// 上記コードのvarをlet もしくはconst に書き換えてください

const str = "result"
const length = 6
let bool = false
if(str.length === length) {
  bool = true
}
console.log(bool)
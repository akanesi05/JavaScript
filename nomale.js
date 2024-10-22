const str = "あいうえお"
const newStr = str.replace("あ", "お")
console.log(str)
console.log(newStr)

const str1 = "あああああ";
// ここから処理を書いてください
const newStr1 = str.replaceAll("あ", "お")
console.log(str1)
console.log(newStr1)
const str2 = "あああああ"
const newStr2 =  str.replace(/あ/g, "お")
console.log(str2)
console.log(newStr2)

const str3 = 'あいうえお';
const answer = str3.split("")
console.log(answer)

const str4 = "あいうえおかきくけこ"
const newstr4 =str.slice( 0, 5 );
console.log(newstr4)

const greeting = "Hi my name is Bob!";
const splitedArray = greeting.split(' ');

splitedArray.forEach((str5) => console.log(str5));

const getStringLength = (str) => {
    if (typeof str !== 'string') {
      throw new Error('引数は文字列である必要があります')
    }
    return str.length
  }
  
  //②で確認
  console.log(getStringLength("123")) //3
  // ③で確認
  console.log(getStringLength(123)) //Uncaught Error: 引数は文字列である必要があります

  const isString = () => {
    return typeof parameter === 'string'
   }
   // ③ログ出力してください。
   
   console.log(isString('3'))
   console.log(isString(3))

   const getFirstChar = (str6) => {
    return str6.slice(0,1)
    }
    console.log(getFirstChar("apple")) 

    const removeFirstChar = (str) => {
        return str.slice(1)
}

console.log(removeFirstChar("apple")) //'pple'

const toggleBoolean = (valid) => {
    if(valid===true){
      return false
    }else{
      return true
    }
  }
  console.log(toggleBoolean(true)) // false

  const arr = ["apple", "orange", "melon"]
const answer2 = (arr) => {
    return arr.join(",")
}
console.log(answer2(arr)) // apple, orange, melon

const object1 = {name: "Bob", "age": 20};
console.log(object1.name)

const object = {name: "Bob", "age": 20};

const getObjectName = object => object.name;

console.log(getObjectName(object));

const library = {
    book: {
       author: "Tom Sawyer",
       year: "11/12/2021"
     }
  }
  
  library.book.year = "10/22/1876";

  const plusAge =(obj) => { 
    obj.age++
    return obj
    }
    
    console.log(plusAge(object));

    const arr1 = ["りんご","みかん","いちご"];
    arr.push('すいか');
    
    console.log(arr1)

    const arr2 = ["りんご","みかん","いちご"];
  // ここに処理を書いてください。
arr2.pop(-1)

console.log(arr2)

const arr3 = ["りんご","みかん","いちご"];
arr.unshift("すいか");
console.log(arr3)


const arr4 = ["りんご","みかん","いちご"];
  console.log(arr4.indexOf("みかん")) 



const arr5= ["りんご", "みかん", "いちご"];

const answer3 = arr5.includes("りんご");
console.log(answer3)

const arr7 = ["りんご", "みかん", "いちご"];
const answer4 = arr.slice(1,3);

console.log(answer4)

const fruits = [ "apple", "orange", "grape"];

const answer6 = fruits.forEach(fruit => { console.log(fruit) })

const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(number => {
  return number * 2
})
console.log(doubleNumbers) // [2, 4, 6]

const data = {
  id: 107,
  name: 'Bob',
  job: 'programmer',
}

const keys = Object.keys(data);
console.log(keys);

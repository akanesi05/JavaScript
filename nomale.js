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
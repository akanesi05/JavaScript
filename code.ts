//オブジェクト型指定
const objectSample: { name: string; age: number } = { name: 'Chris', age: 30 }
// 問題2. 型名[]を使って型を指定
const arraySample: string[] = ['りんご', 'みかん', 'バナナ']
// 問題3. Array<型名>を使って型を指定

const arraySample2: Array<string> = ['りんご', 'みかん', 'バナナ']

//TypeScript基本的な型
//boolean
let bool: boolean = true;

//number数字
let num: number = 0;

//string文字
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1.2];
let arr2: number[]=[0,1,2]

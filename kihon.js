const arrowFunc = function (a, b) {
    return a + b;
  }

  const arrowFunc1 =(a , b)=>a + b

  //従来の関数の記法
function oldFunc(value) {
    return value
  }


  console.log(oldFunc('従来の記法です'))
///基本計const newFunc = () => {}
  const newFunc = (value) => {
    return value
  }
  console.log(newFunc('新しい記法です'))

  // 配列の定義
const arr = ['ハンバーガー', 'ポテト', 'ナゲット']

// mapを使った配列処理
const arr2 = arr.map((food) => food)

//出力
console.log(arr2) // ['ハンバーガー', 'ポテト', 'ナゲット']

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 *  const, letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"; //波線は「ESLint」構文解析ツールによるもの。エラーではない。
// console.log(val1);

let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言できない
//let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
//val3 = "const変数を上書き"
//const val3 = "const変数"

// ただし、オブジェクトや配列については値を変えることが可能
// オブジェクト
// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "hogehoge",
  age: "31"
};
val4.name = "ほげほげ";
val4.address = "岐阜";
console.log(val4);

// 配列
// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

// reactの開発では、ほとんどconstを使っていく
// reactの中で銅的に値が変わるものは"state"と呼ばれる別の定義をする

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * テンプレート文字列
 */
//文字列の中にJavacriptの変数の埋め込みが可能になった
const name = "なり";
const age = "31";

// 「私の名前はなりです。年齢は31歳です。」
// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);
// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//    return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  //引数が１つの場合は()の省略が可能
  return str;
  //処理が１行で終わる場合は下記の書き方でもOK
  //const func2 = (str) => str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * 分割代入
 */
// const myProfile = {
//   name: "なり",
//   age: 31
// };

//const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//console.log(message3);

// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const myProfile = ["なり", 31];

// const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message5);

// const [name, age] = myProfile;
// const message6 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message6);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();
sayHello("じゃけぇ");

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * スプレッド構文 ...
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //スプレッド構文

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; //配列のコピー
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

//下記は参照する形なので、arr4[0]も値が書き変わってしまう
// const arr7 = arr4;
// arr7[0] = 100;
// console.log(arr4);

const arr8 = [...arr4, ...arr5];
console.log(arr8);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * mapやfilterを使った配列の処理(従来のforを使わなくて済む)
 */
//// map ////
const nameArr = ["田中", "井沢", "田辺"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です。`));

//// filter ////
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "井沢") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = "1300";
//console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "超えた！" : "超えない";
};
console.log(checkSum(50, 50));

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * 論理演算子の本当の意味を知ろう || &&
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

//  || は左側がfalseなら右側を返す、左側がtrueなら左側を返す
const kingaku = null;
const fee = kingaku || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const kingaku2 = null;
const fee2 = kingaku2 && "何か設定されました";
console.log(fee2);

//ReactのJSXの中でこの概念が出てくるよー

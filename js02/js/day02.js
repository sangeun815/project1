"use strict"

/*
 let
 const
 var

*/

// var a = undefined
/*
let a;
console.log('a',a);
*/

//let, const: block scope(블록 단위로 관리)

// let a = 30;
// {
//     let a = 10;
//     console.log('block-a', a);   //a:10
// }

// console.log('global-a', a);   //a:30

//var : function scope(global scope)
var su =  100;
{
    var su = 10;
    console.log('su', su);
}
console.log('global-su', su);


console.log('------------');
 
for(let i = 1; i<5; i++){
    console.log('i', i);
}
//let => 블록 단위이기 때문에 i 는 for문에서만 사용됨 
console.log('i...', i);

for(var i = 1; i<5; i++){
    console.log('i', i);
}
//var => function scope 이기 때문
console.log('i...', i);


console.log('-----------');

let tf = '';
if(tf){
    console.log('true');
}
else{
    console.log('false');
}

//배열과 함수 출력하기 
//배열 => object 타입 
let arr = [10,20,30];
let fn = function(){
    console.log('function!!');
}

fn();

console.log('----------');
console.log(arr.length);
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log('-----------');
//타입 출력 방법 
console.log(typeof arr);
console.log(typeof(arr));

console.log(typeof fn);
console.log(typeof(fn));

//객체 타입 => object 타입 
let person = {};

console.log(typeof person);
console.log('------------');
//배열과 객체의 타입이 object 타입으로 갖기 때문에 
//이를 구별하기 위해서 Array.isArray로 판별함 
console.log(Array.isArray(arr));   //true
console.log(Array.isArray(person));  //false

// 데이터 형변환
// let a ='10';
// let b =20;
// let c = a+b;
// console.log(typeof c, c);
// console.log(10/2);
// // *,/ 는 값 자체를 연산함 (string으로 들어와도)
// console.log(typeof(10/2),10/2);
// console.log(typeof('10'/2), '10'/2);
// console.log(typeof('a'/2), 'a'/2);

// console.log('------------');
// console.log(Boolean(''), Boolean('  '));
// console.log(Boolean(0), Boolean('0'));
// //숫자 형으로 바꿔줄 경우
// console.log(Number('10'), Number('aa'), Number(null), Number(undefined));
// console.log(String(0));

/*
    숫자형으로 바꿀 때: parseInt, parseFloat, Number
*/

console.log('------------');
let name = 'hong gil dong';
let jumsu = 100;
console.log('name: ' + name, 'jumsu: ' + jumsu);
console.log('name:',name, 'jumsu:',jumsu);
console.log(`name: ${name}, jumsu:${jumsu}`);

//연산자
/*
    단항 연산자
        ++(증가 연산), --(감소 연산)
        
        let x = 20;
        let y = ++x; (전위 연산) => 증가하고 대입

        let z = x++; (후위 연산) => 대입하고 증가

    이항 연산자
        산술 연산자 : + , - , * , /, %, **

    삼항 연산자

*/

// let a = 10;
// // let b = ++a;
// let b = a++;

// console.log(`a:${a}, b:${b}`);

console.log('------------');

//이항 연산자
let t1 = 10;
let t2 = 3;

//이항 연산자 - 산술연산자
console.log(t1 + t2);
console.log(t1 * t2);
console.log(t1 / t2);
console.log(t1 % t2);
console.log(t1 ** t2);

//이항 연산자 - 연결 연산자
console.log(10 +20 +'aaa');
console.log('aaa' + 10 + 20);

console.log('------------');
/*
    비교 연산

*/
// let a = '10';   //string
// let b = 10;     // number

// console.log(a==b);  //값 끼리 비교
// console.log(a===b);   // 값 & 타입 까지 비교

// console.log('------------');
// let m1 = {name:'hong', age:20};
// let m2 = m1;
// let m3 = {name: 'hong', age:20};

// console.log(typeof m1, typeof m2, typeof m3); //object
// console.log(m1 == m2, m1===m2);  //true
// console.log(m1 == m3, m1 === m3);  //false

// console.log('-------------');

// console.log(typeof(undefined));
// console.log(typeof(null));

// console.log(null == undefined);  //true
// console.log(null ===  undefined);  //false
// console.log(false == ''); //true
// console.log(false == 0);  //true
// console.log(false === 0);   //false

/*

    복합 대입 연산자
    a += 10;
    //a = a+10;

*/

// let a = 10;
// a += 30;
// console.log(a);
// a /= 4;
// console.log(a);

//전체에 대해 계산 할 때는 우측을 먼저 다 계산하고 결합함
// t1 = 10;
// t2 = 20;
// t3 = 4;

// t3 *= t1+t2;

// console.log(t3);

console.log('-------------');

// let max;
// let su1 = 10;
// let su2 = 20;
// max = (su1 > su2)? su1:su2;
// console.log(max);

console.log('-------------');
let a = 10;
console.log(a>>2);
console.log(a<<2);


/*
    논리 연산
*/
console.log('-------------');
console.log(10 >=10  && 10!==10);
console.log(10!==10  && 10 >= 10);

console.log(10 >=10  || 10!==10);
console.log(10!==10  || 10 >= 10);


/*조건문 - if*/

/* 합격 불합격 */
// let kor = 85;
// if(kor>=60)
//     console.log('합격')
// else
// console.log('불합격')

/*
console.log('-------------');
let kor = 85;
if (kor>=90)
    console.log('수');
else if(kor>=80)
    console.log('우');
else if(kor>=70)
    console.log('미');
else if(kor>=60)
    console.log('양');
else
    console.log('가');

*/

// document.getElementById('btn')
// .onclick = function(){

//     let elekor = document.getElementById('kor');
//     // console.log(elekor);

//     let kor = Number(elekor.value);  //값을 넣을 때 value를 사용! 
//     // console.log(kor, typeof(kor));

//     let result = '';

//     if(kor>=90)
//         result='수';
//     else if(kor>=80)
//         result = '우';
//     else if(kor>=70)
//         result = '미';
//     else if(kor>=60)
//         result = '양';
//     else
//         result = '가';
//     document.getElementById('result')
//     .innerHTML = '국어:' +kor + ' 결과:' + result;

//     elekor.value = '';
// }

document.getElementById('btn')
.onclick = function(){

    let elekor = document.getElementById('kor');
    let eleeng = document.getElementById('eng');
    let elemath = document.getElementById('math');
    // console.log(elekor);
    // console.log(eleeng);
    // console.log(elemath);

    let kor = Number(elekor.value);  //값을 넣을 때 value를 사용! 
    let eng = Number(eleeng.value);
    let math = Number(elemath.value);

    console.log(kor);
    console.log(eng);
    console.log(math);

    let average = (kor + eng + math)/3;
    let result = "<li> 평균점수: " + average;

    if(kor>=90 && eng >=90 && math >=90)
        result +='<li>Very good</li>';
    else if(kor>=90 || eng >=90 || math >=90)
        result += '<li>Good</li>';
    else
        result += '<li>Bad</li>';
    document.getElementById('result')
    .innerHTML = result;

    elekor.value = '';
    eleeng.value = '';
    elemath.value = '';
}



/*
    switch문

let su = 10;
switch(변수 or 식)  //변수, 식  
{
    case 값 
    break;

}

*/

let sue = 4;
let data='';
switch(sue)
{
    case 5:
        data += '5';
    case 4:
        data +='4';
    case 3:
        data += '3';
    case 2:
        data += '2';
    case 1:
        data += '1';
    default:
        data += '나머지 경우';
}
console.log(data);

console.log('------------------');

// let num = Number(prompt('숫자를 입력하세요'));
// console.log(typeof(num));
// // let result = num%3;
// switch(num%3){

//     case 0:
//         console.log("3의 배수");
//     case 1:
//         console.log("나머지 값은 1");
//     case 2:
//         console.lot("나머지 값은 2 ");
// }

//for 반복문 
console.log('------------------');
for(let i = 10; i < 15; i++){
    console.log('i : ' , i);
}

// Iterable => 순서 인덱스가 있는 정보들
console.log('------------------');
let array = ['a1', 'a2', 'a3'];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//반복문 출력 방법 1
console.log('=================');
for(let i=0; i<array.length; i++){

    console.log(array[i]);
}
//반복문 출력 방법 2
console.log('==================');
for(let item of array){
    console.log(item);
}
//반복문 출력 방법 3
console.log('==================');
array.forEach(item =>{
    console.log(item);
});

console.log('==================');

let man={
    irum :'홍길동',
    age : 20,
    addr : '서울'
};

console.log(typeof(man), man);
console.log(man.irum);
console.log(man.age);
console.log(man.addr);

//배열은 of  객체는 in 사용!!
console.log('==================');
for(let key in man)
{
    console.log(key);
}

console.log('==================');
//배열에는 in을 사용하지 말자!! => of 사용하기
for (let index in array)
{
    console.log(index);
}

console.log('==================');
let data1 = 'hello, javascript!!!';
console.log(data1[1]);

// data1[1] = 'T';
// console.log(data1);

for(let item of data1){
    console.log(item);
}

/*
    while문: 참일 동안 

*/

console.log('==================');
let q = 0;
while( q < 5)
{
    q++;
    console.log(q);
}

console.log('==================');
let s = 10;
while( s >= 2)
{
    console.log(s);
    s -=2;
}




/*

    break => 반복문(for, while)이나 switch문에서 빠져나옴
    continue => 반복문에서 다음 반복으로 이동 

*/
console.log('==================');
let p = 1;
while(true){
    console.log(p);
    p++;
    if(p==5) break;
}

console.log('==================');
for (let i=1; i<10; i++){

    if(i%3 == 0)
        continue;
    console.log(i);
}

//작성할 때 주의할 점 => 먼저 해당하는 데이터르를 확인하기!
console.log('==================');
let n = 0;
while(n < 10){

    n++;
    if(n%3 == 0)
        continue;
    console.log(n);
}

//배열 출력하기
let sungjuckarr = [60, 90, 70, 100, 75];

sungjuckarr.forEach(function(item){
    console.log(item);
});

// //함수 사용하기 
// function go1(){

// }









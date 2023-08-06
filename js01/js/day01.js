console.log('hello');
/*
1.변수 선언 (값이 변할 때)
    let, var
    상수: const (값이 변하지 않을 때)
*/
const irum = 'hong gil dong'; 
console.log('name', irum);
// irum = 'park !!!!';

// console.log('new name', irum);



var a;
console.log('a', a);
a = 10;
console.log('a', a);

// console.log('a', a);
// var a = 10;

// a=20;
// console.log('new-a', a);
console.log('----------------');

// var b;
// console.log('b', b);


console.log('=================');
// let su;
// su = 10;
// console.log('su', su);

// su = 10;
// console.log('su', su);
// // var su;
// let su;


/*


*/
let a1 = 10;
let b = 'aaa';
let c = 10.2;
let d = 10 == 10;
let f = null;
let e;


/*Primitive 타입 */
console.log(typeof a1, 'a1');
console.log(typeof b, 'b');
console.log(typeof c, 'c');
console.log(typeof d, 'd');
console.log(typeof e, 'e');
console.log(typeof f, 'f');
console.log(10/0 , '10/0');
console.log(-10/0 , '-10/0');
console.log('aa'/10, 'aa/10');


/*Reference 타입 */
let t1=[]; //배열
let t2={}; //객체
let t3 = function(){
    condsole.log('test');
};  //함수 function

console.log(typeof t1);
console.log(typeof t2);
console.log(typeof t3);

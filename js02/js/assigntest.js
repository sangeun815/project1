/*
    구조분해 할당:
    배열이나 객체 속성을 해제해서 개별 변수에 담는 것 
*/

let [a,b] = [10,20];
console.log('a:' , a);
console.log('b:' , b);

console.log('===========');
// ...은 앞에다 작성하면 error남 
// => 나머지 값을 다 받는다는 의미로 항상 마지막에 작성해야함 
let [t1, t2, ...t3] = [100,200,300,400];
console.log(t1);
console.log(t2);
console.log(t3);

console.log('===========');
let [su1, su2] = [100,200];
console.log(`su1: ${su1}, su2: ${su2}`);
[su2, su1] = [su1, su2];
console.log(`su1: ${su1}, su2: ${su2}`);

console.log('===========');
let man = {
    irum: 'hong',
    age:20,
    addr:'seoul'
}

let {irum, age, addr} = man;
//변수 이름과 속성 이름이 같아야 함
console.log(`irum: ${irum}, age: ${age}, addr: ${addr}`);

// 구조 분해 할당 : 배열
console.log('===========');
let [p1,p2,p3] = [10, 20 ];
console.log(p1);
console.log(p2);
console.log(p3);

console.log('===========');
let [c,,d] = ['test1', 'test2', 'test3'];
console.log(c,d);

console.log('===========');
let[k1, ...k2] = ['test1', 'test2', 'test3'];
console.log(k1);
console.log(k2);

console.log('===========');
let arr = [];
let arr2 = new Array(3);

console.log(typeof arr);
console.log(typeof arr2);
console.log(Array.isArray(arr));
console.log(Array.isArray(arr2));

console.log('===========');
let len;
let arr3 = [];
len = arr3.push("a1");

console.log(`len: ${len}, arr:${arr}`);
console.log('------------');

len = arr3.push("a2");
console.log(`len2: ${len}, arr:${arr}`)

/*
객체 생성 방법
    1. Function 생성자 함수 
    2. Object 생성자 함수 
    3. 생성자 함수 
    4. 객체 리터럴 
    5. 클래스 
*/

/*
    "use strict" => 엄격하게 동작!!
*/

// 1번 방법 
const op = new Function("a","b","return a+b");

let result = op(10,20);
console.log('result', result);

console.log("==============");

//2번 방법 
let person1 = new Object();
person1.name = "홍길동";
person1.age = 20;
person1.addr="서울";

console.log(`name: ${person1.name}, age: ${person1.age}, addr: ${person1.addr}`);

person1.prt = function(){
    console.log('prt function!!!');
}

console.log(person1);

console.log(typeof person1);   //배열과 타입이 같음 (object 타입)
console.log(Array.isArray(person1)); 

console.log("==============");

//3번 방법
function Man(irum, age){
    this.irum = irum;
    this.age = age;
    this.prt = function(){
        console.log(`irum: ${this.irum}, age: ${this.age}`);
    }
}

let p1 = new Man("hong", 20);
let p2 =  new Man("park", 10);

console.log(p1);
console.log(p2);

console.log(p1.irum, p1.age);
p1.prt();
console.log("==============");
console.log(p2['irum'], p2['age']);
p2.prt();


console.log("==============");

//4번 방법
const m1 = {irum: 'hong', age:20, addr:'서울'};
const m2 = {irum: 'park', age:10, addr:'경기'};

console.log(typeof m1, m1);
console.log(typeof m2, m2);

console.log(m1.irum, m1.age, m1.addr);
console.log(m2['irum'], m2['age'], m2['addr']);


console.log("==============");
//5번 방법 
class Student{
    
    //생성자
    constructor(studentId, irum, age){
        this.studentId = studentId;
        this.irum = irum;
        this.age = age;
    }
}

let s1 = new Student(1, "hong", 20);
let s2 = new Student(2, "Park", 10);

console.log(typeof s1, s1);
console.log(typeof s2, s2);

console.log("==============");
//객체 - 속성 추가/삭제/적용

/*
    속성 추가
 */

s1.addr ='서울';
s1.sayHello =()=>{
    console.log("안녕하세요");
}
console.log(s1);
s1.sayHello();

console.log("==============");
/*
    속성 삭제
 */

delete s1.age;
console.log(s1);

/*
    속성 적용
    => 대괄호[] 사용
    
    대괄호만 사용하는 경우
        여러 개의 속성이 한 값을 정의할 때
        런타임시 결정되는 속성
 */

//s1.nick1 nick2 = 'eee';  => 오류남
s1['nick1 nick2'] = 'test!!!';
console.log(s1);
// console.log(s1.nick1 nick2); => 오류남
console.log(s1['nick1 nick2']);


//runtime시 결정되는 속성일 경우 => 대괄호 사용해야 함 (. 을 사용하면 안됨!)
let a = 'age';
const user = {
    name:'hong'
    , [a]:20
}
console.log(user);


//반복문 - for in => 객체
console.log("==============");

console.log(s1);

for(let item in s1){

    //s1 객체의 값들을 출력하고 싶을 경우 
    console.log(s1[item]); //대괄호를 작성해야 item에 대한 값들을 받아올 수 있음 (. 을 사용하면 오류남)
    // console.log(item);
}

// 프로토타입(prototype) 객체 
class Student1{
    constructor(irum, age)
    {
        this.irum = irum;
        this.age = age;
    }

    // prt = function(){   => 메모리 낭비가 발생함 
    //     console.log('prt method');
    // }
}
 
Student1.prototype.prt = function(){
    console.log('prt!!!');
}


let ins1 = new Student1("a1",20);
let ins2 = new Student1("a2",10);

console.log(ins1);
console.log(ins2);
console.log('-----------');
console.dir(ins1); //목록에 대한 정보
console.dir(ins2);
console.log('-----------');
ins1.prt();
ins2.prt();  
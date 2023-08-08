function fn_move1(){
    console.log('fn_move1-1');
    console.log('fn_move1-2');
}


fn_move1();
console.log('=============');
//함수 호출
fn_move1();

console.log('=============');
function fn_move2(irum, age)  //변수에 대한 param만 입력하기(java와의 차이점)
{
    console.log(`name: ${irum}, age: ${age}`);
    console.log('움직입니다.!!');
}

fn_move2('hong', 20);

console.log('=============');

function getSu()
{
    let su = 100;
    return su;  //return은 무조건 값!!(변수로 return을 하지만 항상 값으로 반환함!)
}
let suu = getSu();
console.log('값은:' + suu);


/* 두개의 숫자를 입력받아서 더한 값을 return 하시오. */
console.log('=============');
function add(a, b)
{
    result = a+b;
    return result
}
let su1 = 10;
let su2 = 20;

let result_add = add(su1, su2); 
console.log('처리 결과는:' + result_add);

console.log('=============');
//call by value => 값을 복사해서 줌
function prt(arg)
{
    console.log(typeof(arg), arg);
}
prt(10);

//call by reference => 주소 복사 (값 복사가 아님)!

function prt2(arg){
    console.log(arg, typeof(arg));
}
let arr= [10,20,30];
prt2(arr);


console.log('=============');
//변수 scope => global scope(전역변수), local scope(지역변수)

let irum_scope = 'kim';  //전역 변수

function prt3(){
    var test = 'hong';   //지역 변수 
    console.log(irum_scope, test);

}

prt3();
console.log('=============');
// console.log(irum_scope, test);  //변수 test는 지역 변수 이기 때문에 error남


//함수 표현식 : 접근할 때마다 파싱
//매개변수가 없는 경우
const prt4 = function(){
    console.log('prt4');
}

prt4();

console.log('=============');
//매개변수가 있는 경우
const prt5 = function(irum = 'hello', age = 0){  //디폴트 값 지정 가능 
    console.log('irum: ' ,irum);
    console.log('age: ' ,age);
}

prt5('test',20);
prt5();  // 디폴트 값이 나옴 


console.log('=============');
//rest parameter => 파라미터를 가변화 해서 받을 수 있음 
const show = function(...name){
    //배열 출력 방법 1
    for(let i = 0; i<name.length;i++){
        console.log(name[i]);
    }
    //배열 출력 방법 2
    console.log('=============');
    for(let a of name){
        console.log(a);
    }
}

show();
console.log('====== parameter 1 =======');
show('a1');
console.log('====== parameter 2=======');
show('a1', 'a2');

//spread syntax => 함수를 호출할 때 spread syntax 사용 

console.log('=============');
let arr1 = [10,20,30];
let arr2 = [100,200,300];

let arr3 = [...arr1, ...arr2]; // => let arr3 = [10,20,30,100,200,300];
let prt6 = function(t)
{
    console.log(t[1]);
}

prt6(arr3);

//화살표 함수 표현식(arrow function expression) => 요즘 제일 많이 사용함!

console.log('=============');
//매개 변수가 없는 경우   
let prt7 = () => 'hong';  // 한 줄은 return을 하겠다는 의미 

let result_prt7 = prt7();
console.log(result_prt7);

let prt8 = () => {         // 두 줄은 타입은 void (return이 없으면 중괄호{} 작성하기)
    console.log('test1');
    console.log('test2');
}

prt8();

//매개변수가 있는 경우
let prt9 = (a,b) => {
    console.log('a: ', a, 'b: ', b);
}

prt9('test', 1);

//콜백 함수 
console.log('=============');
let fn = function(a,b,t1){
    console.log(a,b);
    console.log(t1); // t1은 add함수의 정보를 가지고 있음 
    t1(a,b);
}

let add3 = function(su1, su2){
    console.log('add function', (su1+su2));
}

fn(10,20, add3); //add라는 함수를 변수처럼 집어넣음 => 콜백함수 

//콜백 함수 => forEach(배열 출력)

[10,20,30].forEach(function(item){
    console.log(item);
});

//콜백 함수 => arrow 연산자 
console.log('=============');
[10,20,30].forEach((item)=>{
    console.log(item);
})





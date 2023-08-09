"user strict"

let a1 = [10,20,30];
let a2 = a1;

console.log(a1 === a2);

// forEach => return은 되지 않고 출력만 가능
a1.forEach(item=>{  
    console.log(item);
});

console.log('=======================');
a2[1] = 100;          
a1.forEach(item=>{       //주소 복사가 일어남 
    console.log(item);
});

console.log('========================');
/*복제*/ 
// assign 메서드 => 요소에 대한 복사가 일어남 
let a = [10,20,30];

let newA = Object.assign([],a);
console.log(a === newA);

newA[1] = 100;
a.forEach(item=>{
    console.log(item);
});
console.log('-----------------------');
newA.forEach(item=>{         //요소에 대한 복사가 일어남 
    console.log(item);
});

console.log('========================');
//객체 복제 
let p1 = {name: 'hong'}
console.log(p1);

Object.assign(p1, {age:10});
console.log(p1);

Object.assign(p1, {name:'park'});
console.log(p1);

// Object.is => 두 객체가 같은지 각 요소로 확인하기
let o = new Object([10,20,30]);
let o2 = new Object([10,20,30]);

console.log(o === o2);

/* String */
//substring, split, slice 메서드

//출력 결과

/*
이메일: aaa
도메인: aaa.com
*/
let email = "aaa@aa.com";

console.log(email.substring(0,3));
console.log(email.substring(4,10));

//방법 1
let result = email.split('@');
console.log(result);  //배열로 나옴 
console.log(`이메일: ${result[0]}, 도메인: ${result[1]}`);  //배열로 나옴 

result.forEach(item=>{  //forEach 구문으로 요소 출력하기 
    console.log(item);
});

console.log('-----------------------');

//방법2
let loc = email.indexOf('@');
console.log(loc);

let e1=email.slice(0, loc);
let e2 =email.slice(loc+1);
console.log(`이메일: ${e1}, 도메인: ${e2}`); 

/* Array */
console.log('=========================');
// concat 메서드
let arr = [10,20,30];
let arr2 = new Array(100,200,300);

let newarr = arr.concat(arr2,['t1','t2']);

console.log(arr);
console.log(newarr);

//find 메서드 => 판별 함수를 만족하는 첫 번째 요소의 값을 반환 
console.log('=========================');
let data = [10,50,30,40,100,50];
let result2 = data.find(function(element){
    // return element === 50;
    return element>=40;
});

console.log(result2);

//filter 메서드 => 점수/난이도에 대해서 뽑기 
console.log('=========================');
let data2 = [10,50,30,40,100,50];
let result3 = data.filter(function(element){
    // return element === 50;
    return element>=40;
});

console.log(result3);

//join메서드
console.log('=========================');
let arrName=['hong','kim','lee'];

// let result4 = arrName.join();
// let result4 = arrName.join('');
let result4 = arrName.join('/');
console.log(result4);

//push, pop 메서드 
console.log('=========================');
let arr3 = [];
arr3.push('aaa');
arr3.push('bbb');
arr3.push('ccc');

console.log(arr3, arr3.length);

arr3.forEach(item=>{
    console.log(item);
});
console.log(arr3, arr3.length);

console.log('---------------------------');
let d1 = arr3.pop();
console.log(`삭제한 요소: ${d1}, 전체요소:${arr3}`);

let irums = ['홍','김', '이', '박', '나'];
/*
forEach & Map
*/
/* 
 // 내가 작성한 코드 
result = "";
document.getElementById('view_btn').onclick = function(){
        irums.forEach(item=>{
            // result += "<li>" +item + "</li>";
            result += `<li>${item}</li>`;
            console.log(item);
        });

        document.getElementById('result').innerHTML = result;
}
*/

/*
//forEach => 출력만!
//map 은 새로운 자료를 받아서 return을 해줌 
*/

// //forEach 방법
// document.getElementById('view_btn').addEventListener('click', function(){
    
//     result = "";
//     irums.forEach(item=>{
//         result += `<li>${item}</li>`;
//         // console.log(item);
//     });

//     document.getElementById('result').innerHTML = result;

// })

// //Map 방법 
// document.getElementById('view_btn').addEventListener('click', function(){
    
//     let result = irums.map((item) =>`<li> ${item} </li>`);  //arrow function 
//      console.log(result);

//     document.getElementById('result').innerHTML =  result.join('');
// })

/*
    예외처리 
    => RangeError, ReferenceError, 예외 강제 발생(throw expression) 
*/
console.log('=========================');

try{

    console.log('test');
    console.log('test2');
    let arr4 = new Array(-1);
    console.log('test3');
}catch(e){

    // console.log(e);
    console.log('tttttt');

}finally{
    console.log('finally');
}

console.log('=========================');
let a3 = 10;
try{
    if(a>20)
        console.log('a가 20보다 크다.');
    else if(a == 20) 
        throw new Error('20와 동일'); //에러객체를 만들어서 던지기 (예외 강제 발생) 
    else
        throw new Error('20보다 작다.');

}catch(e){  //catch가 받음
    console.log(e);

}finally{

    console.log('end!!');
    
}

console.log('=========================');
document.getElementById('send').addEventListener('click', function(){
    const irum = document.getElementById('irum');
    const txtage = document.getElementById('age');

    /*
        숫자: 숫자형 숫자
              문자형 숫자 
    */
    try{
        let age = Number(txtage.value);
        console.log(typeof(age));
        if(Number.isNaN(age))
        {
            throw new Error('숫자형 자료가 아닙니다.');
        }else{
            if(age<0)
                throw new Error('0보다 작습니다.');
            else{
                console.log(`이름 ${irum}, 나이 ${age}`);
        }
        }

    }catch(e){
        console.log(e);
    }finally{
        console.log('done!!');
    }

    irum.value ="";
    txtage.value="";

});

/*
    async: 브라우저가 페이지를 파싱하는 동안에도 스크립트가 실행 
    defer : 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행 
    async, defer 모두 선언하지 않을 경우
        : 브라우저가 페이지를 파싱하기 전에 스크립트를 가져와서 바로 실행 
*/

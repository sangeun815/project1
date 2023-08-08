//방법 1
//onclick라는 이벤트 핸들러로 function이 동작됨
document.getElementById('sum').onclick = function(){ 

    let su1_id = document.getElementById('su1');
    let su2_id = document.getElementById('su2');
    // console.log(tostring);

    let su1 = Number(su1_id.value);   //value를 얻어옴 (get)
    let su2 = Number(su2_id.value);

    console.log(typeof su1, su1);
    console.log(typeof su2, su2);

    let sum = su1 + su2;

    console.log(sum);

    document.getElementById('result').innerHTML = `합: ${sum}` ;
    
    su1_id.value="";   //value를 수정(초기화) (set)
    su2_id.value="";

}

//방법 2
//콜백 함수 이용
document.getElementById('sum').addEventListener('click', function(){
    
    let su1_id = document.getElementById('su1');
    let su2_id = document.getElementById('su2'); 

    let result = Number(su1.value) + Number(su2.value);

    console.log(result);

    su1_id.value="";   
    su2_id.value="";

});


//Number 타입과 String 타입
let su1 = Number('10');
let data = su1.toString();

console.log(typeof su1, su1);
console.log(typeof data, data);

console.log('----------------');
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Date 타입 => 현재 시각 출력하기 
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// console.log(year, month, day, hour , minutes, seconds);

let result = `${year}.${month}.${day}. ${hour}:${minutes}:${seconds}`;
console.log(result);
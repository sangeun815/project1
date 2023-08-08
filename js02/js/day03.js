/*

    IIFE :
    정의하자마자 즉시 실행되는 함수

 */
(function prt(){
    console.log("prt!!!");
})();

// prt();

//일반적인 함수 호출 방법 
let fnprt = function(a, b){
    console.log(`test fnprt ${a}, ${b}`);
}
fnprt(10,20);

//"use strict"
// 위 식을 arrow function을 이용해 즉시 실행 함수 출력하기
((a,b) =>{
    console.log(`test fnprt ${a}, ${b}`);
})(10,20);


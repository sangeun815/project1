// document.getElementById('win_open')
// .onclick = function(){
//     // location.href="http://www.naver.com";
//     // document.write('hello');
// }



let d = document.body;
console.log(d);

let list_id = document.getElementById('listId');
console.log(list_id);

let li_class = document.getElementsByClassName('listClass');
console.log(li_class);

let tagname = document.getElementsByTagName('li');
console.log(tagname);

//같은 이름을 가지고 있는 자료들만 보여줌 
let names = document.getElementsByName('listName');
console.log(names);

let child1 = document.body.children;
console.log(child1);

//list-3의 값을 받아옴 
//let lis = document.getElementsByTagName('li')[2].textContent;
// let lis = document.getElementsByTagName('li')[2].className;
let lis = document.getElementsByTagName('li')[2].tagName;
console.log(lis);



/* menu list 실습하기 */
let ele_red = document.getElementsByClassName('red'); // 클래스 이름을 받음 => 동적인 정보들 받아옴 
// let ele_red1 = document.querySelectorAll('.red'); //.으로 찍어져 있는 자료들을 받아올 때 => 정적인 정보들 받아옴

// console.log(ele_red);
// console.log(ele_red1);


//비추천 방법
/*
for (let i=0; i<ele_red.length; i++)
{
    // index 자체의 재조정으로 인해 menu2는 green으로 바뀌지 못함
    //forEach, of 를 사용하면 안됨 => index 재조정이 안되기 때문에 
    ele_red[i].className = 'green'; 
    i--; //--를 붙이면 index가 재조정되어 유지됨;
}
*/

/*
// 방법 1
for(let i=ele_red.length-1; i>=0 ;i--)
{
    ele_red[i].className='green';

}

//방법 2 => spread syntax 구문 이용
[...ele_red].forEach(item => item.className = 'green');


//방법 3 => querySelectorAll
document.querySelectorAll('.red').forEach(item => item.className = 'green'); //=> 정적인 정보들을 받아서 처리 
*/


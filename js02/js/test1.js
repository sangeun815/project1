//onclick라는 이벤트 핸들러로 function이 동작됨
document.getElementById('btn').onclick = function(){ 

    let name_id = document.getElementById('name');
    // console.log(tostring);

    let name = name_id.value;   //value를 얻어옴 (get)
    console.log(typeof name, name);

    document.getElementById('result').innerHTML += `<li>${name}</li>` ;
    
    name_id.value="";   //value를 수정(초기화) (set)

}
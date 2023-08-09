document.getElementById('append').addEventListener('click', function(e){

    e.preventDefault(); //기본 동작을 막음 
    // console.log(e.target);  //버튼을 눌렀을 때 버튼 정보가 출력됨

    let irum = document.getElementById('irum');
    let data = irum.value;
    let ele_li = document.createElement('li'); //요소 추가하기

    let txt = document.createTextNode(data);

    ele_li.appendChild(txt);

    let result = document.getElementById('result');
    result.appendChild(ele_li); //result에 자식노드를 연결할 수 있음 
    
    irum.value="";

});


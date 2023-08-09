let arr = [];
document.getElementById('append').onclick = function(){

    let name_id = document.getElementById('name');
    let age_id= document.getElementById('age');

    let name = name_id.value;   //value를 얻어옴 (get)
    let age = age_id.value;

    console.log(typeof name, name);
    console.log(typeof age, age);

    arr.push({name, age});

    console.log(arr);
    
    name_id.value="";   //value를 수정(초기화) (set)
    age_id.value = "";
}

document.getElementById('view').onclick = function(){

    let name_id = document.getElementById('name');
    let age_id= document.getElementById('age');

    let name = name_id.value;   //value를 얻어옴 (get)
    let age = age_id.value;

    // console.log(typeof name, name);
    // console.log(typeof age, age);

    for(array of arr){
        console.log(array.name, array.age);
    }

    document.getElementById('result').innerHTML += `<li>${name} , ${age}</li>` ;
    
    name_id.value="";   //value를 수정(초기화) (set)
    age_id.value = "";
}



/*
let arrinfo=[];
document.getElementById('append').addEventListener('click', function(){
    let txtname = document.getElementById('name');
    let txtage = document.getElementById('age');

    let name = txtname.value;
    let age = Number(txtage.value);

    let info = {name:name, age:age};
    arrinfo.push(info);

    txtname.value="";
    txtage.value = "";
});

document.getElementById('view').onclick = function(){

    let liList = arrinfo.map((item)=>`<li> name: ${item.name}, age: ${item.age}</li>`);
    document.getElementById('result').innerHTML = liList;
    // document.getElementById('result').innerHTML = forEach(liList);
}

//forEach => 출력만!
//map 은 새로운 자료를 받아서 return을 해줌 
*/
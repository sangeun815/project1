let a;

document.getElementById('timer').onclick =function()
{
    a = setInterval(() => {

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let result = `${year}.${month}.${day}. ${hour}:${minutes}:${seconds}`;

        document.getElementById('result').innerHTML = result;
    }, 1000); //1초마다 해당하는 메서드 동작  
}

document.getElementById('stop').onclick = function()
{
    clearInterval(a);
}
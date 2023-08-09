class Man
{
    constructor(irum, age)
    {
        console.log('constructor');
        // _를 붙이지 않으면 getter 혹은 setter가 같이 호출됨!!
        // _를 붙여야지 setter 호출이 안됨!!
        this._irum = irum;
        this._age = age;
    }

    get irum()
    {
        console.log('getter irum');
        return this._irum;
    }

    set irum(irum)
    {
        console.log('setter irum');
        this._irum = irum;
    }

    get age(){
        console.log('getter age');
        return this._age;
    }

    set age(age){
        console.log('setter age');
        this._age = age;
    }
}

let m1 = new Man('hong', 20);
console.log(m1._age);


// 상속 및 메서드 오버라이딩
class P1
{
    constructor(age)
    {
        this._age = age;

    }
    prt = function(){
        console.log('P1 - prt method');
    }
}
class C1 extends P1
{
    constructor(irum, age)
    {
        super(age);
        this._irum = irum;
    }

    prt = function(){
        console.log('C1 prt method');
    }

    show = function(){
        console.log("C1 show method");
    }
}

let ins = new P1(20);
ins.prt();
// ins.show(); 메서드 선언안됨!!

let ins2 = new C1("HONG", 10);
ins2.prt();
ins2.show();
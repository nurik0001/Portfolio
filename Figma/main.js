
// 1
const name="Nurdaulet";

 console.log(name)
// 2
var age=24
age+=1;
console.log(age);
// 3
var isStudent=true;
    console.log(isStudent);

    isStudent=false;
    console.log(isStudent);
    
   
    // 4
    var firstnName="Nurdaulet";
    var lastName="Yusupov";
    var fullName=firstnName+lastName;
    console.log(fullName);
    
    // 5
    var fruits=["apple","banana","orange"];
    console.log(fruits);
    // 6
    var car={
        make :toyota,
        model:corolla,
        year:2010,
    }
    console.log(car);
    console.log(car.year);
    // 7
    var num=10;
    console.log(typeof num);
    // 8
    var x=10;
    var y=10;
    var result=x===y;
    console.log(result);
    // 9

    var strNumber="123";
    console.log(strNumber);
    // Surau ?


    // 10
    var undefinedVar;
    console.log(undefinedVar);



    // 11
    function greet(){
    console.log("Hello world")

    }
    greet();

    function great(){
        console.log("Hello Kazakshtan")
    }
    great();  
    // great oryndau

    function console(){
        console.log("Console shgaru");

    }
    // oryndau
   console();


//    12
function add(a,b){
    return a+b;   
    // teturn qaitarady 

}
var result =add (  5,7);
 console.log(result);

 function addd(a,b){
    return a*b;
 }
 let resultt=add(7,9);

 console.log(resultt);




//  13


//  ozim basynda istedim qate surau
function square(a){
    return a^;

}
var reslut=square(a^);

console.log(reslut);
// durys
function square(a){
    return a*a;

}
var reslut=square(5);

console.log(reslut);


// 14

var fruits=['apple', 'banana', 'cherry'];
 
function getFisrtElement (){
    return frutis[0];
}
console.log(getFisrtElement());

// 15

var car={
    make:"Toyota",
    model:"camry",
    year:2020
}

function gerCarInfo(){
    return car;
}
console.log(gerCarInfo());

// 16 
var multiply=function(a,b){
    return a*b;
}
var result=multiply(5,6);
 console.log(result);
//  17
function divide(a,b){
    return a/b;
}
var result=divide(20,5);
console.log(result);
// 18
var number=[2,4,5,9,5,3];
function sumAll(){
    return 
}
// surau kerek 

// 19
// Функция makeCounter возвращает другую функцию-счетчик
function makeCounter() {
    let count = 0; // Переменная для хранения текущего значения счетчика

    return function() {
        count += 1; // Увеличиваем счетчик на 1
        return count; // Возвращаем текущее значение счетчика
    };
}


const counter = makeCounter();


console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

// 20

// Функция processArray принимает массив и функцию обратного вызова
function processArray(arr, callback) {
    // Проходим по каждому элементу массива
    arr.forEach(function(element) {
        callback(element); // Вызываем переданную функцию для каждого элемента
    });
}

// Пример функции обратного вызова, которая выводит элемент в консоль
function printElement(element) {
    console.log(element); // Выводим элемент
}

// Создаем массив
var numbers = [1, 2, 3, 4, 5];

// Вызываем processArray с массивом и функцией обратного вызова
processArray(numbers, printElement);








    
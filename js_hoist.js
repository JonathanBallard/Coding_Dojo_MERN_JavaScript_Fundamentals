// JavaScript Hoisting





//1
// console.log(hello);                                   
// var hello = 'world';                                 


//1 ANSWER
var hello;
console.log(hello);
hello = 'world';

//1 OUTPUT: 
//undefined


/* 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
*/

//2 ANSWER
var needle;
needle = 'haystack';
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
test()

//2 OUTPUT:
// magnet


/* 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

*/

//3 ANSWER
var brendan;
brendan = 'super cool';
function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
console.log(brendan);

//3 OUTPUT:
// super cool



/* 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

*/

//4 ANSWER
var food;
food = "chicken";
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
    }

eat();

//4 OUTPUT:
// half-chicken


/* 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
*/

//5 ANSWER
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);
//5 OUTPUT:
// chicken
// fish
// chicken
// chicken



























































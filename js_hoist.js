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
var mean;
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
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



/* 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
*/

//6 ANSWER
var genre;
console.log(genre);
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

//6 OUTPUT:
// undefined
// rock
// r&b
// disco


/* 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
*/

//7 ANSWER
var dojo;
dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);


//7 OUTPUT:
// san jose
// seattle
// burbank
// san jose

/* 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
*/

//8 ANSWER



//8 OUTPUT:
// 
// 
// 


















































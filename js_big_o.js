// import Math from Math


Number.prototype.isPrime = function() {
    for( let i=2; i <= Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}



// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);





const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");



const reversed2 = story => {
    let newStory = ""
    let splitStory = story.split("")
    for(let i = story.length - 1; i >= 0; i--){
        newStory += splitStory[i];

    }


    return newStory;
}









const { performance } = require('perf_hooks');
const start = performance.now();

rFib(20);


console.log(`rFib took ${performance.now() - start} milliseconds to run`);



const start2 = performance.now();

iFib(20);


console.log(`iFib took ${performance.now() - start2} milliseconds to run`);



const start3 = performance.now();

reversed1;


console.log(`reversed1 took ${performance.now() - start3} milliseconds to run`);


const start4 = performance.now();

reversed2;


console.log(`reversed2 took ${performance.now() - start4} milliseconds to run`);























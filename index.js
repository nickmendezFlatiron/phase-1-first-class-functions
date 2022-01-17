function receivesAFunction(callback){
    return callback();
}

function game () {
    console.log("its game time")
}
receivesAFunction(game);


function returnsANamedFunction() {
    return function aNamedFunction(){
        console.log("im a named function")
    }
}

returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function () {
        console.log("im an anonymous function")
    };
}
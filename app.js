//Declare a global counter variable.
let counter = 1;

function increment(){
    counter++;
    increment()
}
try{
    increment();
}
catch{
    console.log("Maximum call stack size exceeded at: ", counter)
}

/**Create a simple function that increments
 *  the variable, and then calls 
 * itself recursively.
 */

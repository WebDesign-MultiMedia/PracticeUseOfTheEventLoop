//PART ONE Stack Overflow
// Declare a global counter variable.

// Create a simple function that increments the variable, and then calls itself recursively.

// Surround the initial function call in a try/catch block.

// Within the catch, log the error and the value of the counter variable.

let counter = 1;

function increment(){
    counter++;
    // console.log(counter)
    increment()
}
try{
    increment();
}
catch{
    console.log("Maximum call stack size exceeded at: ", counter)
}




// PART TWO

// let counter = 1;

// function increment(){
//     console.log(counter);

//     // base case
//     if(counter >= 100){
//         return true
//     } 

//     //increment
//     counter++;
//     increment()


// }
// increment()



// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

let example = [
    [1,],[2],[3],
    4,5,6
]

function flattenArr(array){

    let result = []
    for( let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){

            result = result.concat(flattenArr(array[i])); 
                
        }else{
            result.push(array[i])
        }
    }
    return result;
}
console.log(flattenArr(example));




// PART THREE Deferred Execution

// const text = document.getElementById('text');
// text.textContent = 'Hi';
// text.style.fontSize = '2em';

// const center = document.getElementById('box');
// center.style.textAlign = 'center';


    const n = prompt("Enter a Range Number");

let output = document.getElementById('text')

let titlePrime = document.getElementById('title');
setTimeout(() => {
    
    titlePrime.textContent = "Finding Prime Numbers betwwen 1 and" + " " + n;
},2000);

titlePrime.style.textAlign = 'center';

function primeNum(){
    for(let i = 0; i <= n; i++){
        flag = true;
        for(let j = 2; j<= i - 1; j++){
            if(i % j == 0){

                flag =  false;
                break
            }
        }
        if(flag){
        const me = document.createElement('li');
        let anwwer = (i + " " + 'prime');
        me.append(anwwer);

        setTimeout(() => {
            output.appendChild(me);
        },8000);

        me.style.color = 'red';
        me.style.textAlign = 'center';
        me.style.listStyle = 'none';
    }

    }

    setTimeout(() => {
        alert("Calculation Completed")
    }, 7000);
}
primeNum(n)




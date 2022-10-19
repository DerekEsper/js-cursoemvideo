// TRADICIONAL

function fatorial(n) {

    let fat = 1;

    for(let contador = n; contador > 1; contador--) { 
        
        fat *= contador;
    }
    return fat;
}

console.log(fatorial(5));


// 5! = FATORIAL
// 5! = 5 X 4 X 3 X 2 X 1 = 120

//n = (n-1) + (n-2)

function totalSteps(n){
    if(n === 1){
        return 1;
    }
    let a = 1;
    let b = 2;
    for(let i = 3; i <= n; i++){
        let temp = a;
        a = b;
        b += temp;
    }
    return b;
}

let input = 4;
console.log(totalSteps(input));
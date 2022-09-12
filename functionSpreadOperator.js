const add = (a, b,...params) => {
    console.log(params);
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        sum += element;
    }
    return sum;
    // return a + b + c;
}


console.log(add(1, 2,3,4,5));
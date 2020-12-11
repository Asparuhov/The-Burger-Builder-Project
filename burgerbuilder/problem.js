const solve = (input) => {
    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < input.length; j++ ){
            let isOdd = 0;
            if (input[i].indexOf(input[j]) > -1) {
                isOdd += 1;
            }
            console.log(isOdd);
        }
    }
}

solve([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
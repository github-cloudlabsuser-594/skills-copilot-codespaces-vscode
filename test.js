const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstNum) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
        rl.question('Enter the second number: ', (secondNum) => {
            let result;

            switch(operator) {
                case '+':
                    result = parseFloat(firstNum) + parseFloat(secondNum);
                    break;
                case '-':
                    result = parseFloat(firstNum) - parseFloat(secondNum);
                    break;
                case '*':
                    result = parseFloat(firstNum) * parseFloat(secondNum);
                    break;
                case '/':
                    if(secondNum != 0) {
                        result = parseFloat(firstNum) / parseFloat(secondNum);
                    } else {
                        console.log("Error! Division by zero.");
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log("Invalid operator! Please use one of +, -, *, /.");
                    rl.close();
                    return;
            }

            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});
function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
let firstNumber;
let secondNumber;
let operator;
function operate(fn,sn,op){
    switch(op){
        case '+':
            return add(fn,sn);
            break;
            case '-':
                return substract(fn,sn);
                break;
                case '*':
                    return multiply(fn,sn);
                    break;
                    case '/':
                        return divide(fn,sn);
                        break;
                        default:return null;
    }
}
firstNumber=3;
secondNumber=4;
operator='*';
console.log(operate(firstNumber,secondNumber,operator));
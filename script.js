const add = (x, y) => {
    return x + y;
};

const multiply = (x, y) => {
    return x * y;
};

const square = (x) => {
    return x * x;
};

const addSquares = (x, y) => {
    return square(x) + square(y);
};

const getInputValues = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return {num1, num2}
};

const addNumbers = () => {
    const {num1, num2} = getInputValues();
    alert("Result: " + add(num1, num2));
};

const multiplyNumbers = () => {
    const {num1, num2} = getInputValues();
    alert("Result: " + multiply(num1, num2));
};

const squareNumbers = () => {
    const {num1} = getInputValues();
    alert("Result: " + square(num1));
}

const addSquaresNumbers = () => {
    const {num1, num2} = getInputValues();
    alert("Results: " + addSquares(num1, num2))
}

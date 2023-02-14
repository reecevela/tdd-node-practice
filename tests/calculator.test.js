import calculator from "../scripts/calculator";

const calc = new calculator;

test('adds', () => {
    expect(calc.add(1, 2)).toBe(3);
})

test('subtracts', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
})

test('divides', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
})

test('multiplies', () => {
    expect(calc.multiply(1, 2)).toBe(2);
})
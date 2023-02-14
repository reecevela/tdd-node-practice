import caesar from "../scripts/caesar";

test('test', () => {
    expect(caesar('hello', 2)).toBe('jgnnq');
});

test('Ignores numbers', () => {
    expect(caesar('hello4', 2)).toBe('jgnnq4');
});

test('Ignores spaces', () => {
    expect(caesar('he l l o', 2)).toBe('jg n n q');
});

test('Ignores special characters', () => {
    expect(caesar('hello!!!', 2)).toBe('jgnnq!!!');
});

test('Characters wrap around', () => {
    expect(caesar('xyz', 3)).toBe('abc');
});

test('Works for very high shift values', () => {
    expect(caesar('hello', 2 + 26 * 100)).toBe('jgnnq');
});

test('Doesn\'t break on empty string input', () => {
    expect(caesar('')).toBe('');
});

test('Doesn\'t break on no input whatsoever', () => {
    expect(caesar()).toBe('');
});
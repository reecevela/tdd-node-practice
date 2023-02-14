import capitalize from "./capitalize";

test('Capitalizes a single letter', () => {
    expect(capitalize('a')).toBe('A');
});

test('Doesn\'t modify numbers', () => {
    expect(capitalize('123123')).toBe('123123');
});

test('Only capitalizes first letter', () => {
    expect(capitalize('hello there')).toBe('Hello there');
});

test('Works with punctuation', () => {
    expect(capitalize('hi - how are you?')).toBe('Hi - how are you?');
});
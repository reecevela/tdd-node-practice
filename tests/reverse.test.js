import reverse from "../scripts/reverse";

test('reverses letters', () => {
    expect(reverse('hello world')).toBe('dlrow olleh');
});

test('reverses numbers', () => {
    expect(reverse('87654')).toBe('45678');
});

test('handles empty input', () => {
    expect(reverse('')).toBe('');
});

test('handles single character', () => {
    expect(reverse('i')).toBe('i');
});
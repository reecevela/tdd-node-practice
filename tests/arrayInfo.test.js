import arrayInfo from "../scripts/arrayInfo";

test('arrayInfo exists', () => {
    const arrayInfo = jest.fn();
    arrayInfo();
    expect(arrayInfo).toHaveBeenCalled();
});

test('average works', () => {
    expect(arrayInfo([0, 0, 3]).average()).toBe(1);
});

test('min works', () => {
    expect(arrayInfo([12, 6, 3]).min()).toBe(3);
});

test('max works', () => {
    expect(arrayInfo([1, 8, 3]).max()).toBe(8);
});

test('length works', () => {
    expect(arrayInfo([0, 0, 3, 4, 3]).length()).toBe(5);
});
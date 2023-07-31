import checkValidity from "../checkValidity";

test.each([
    ['should return true for valid card number', '4916946690523674', true],
    ['should return false for invalid card number', '4916946690523673', false],
    ['should return false for empty card number', '', false]
])(('should return true or false'), (_, input, expected) => {
    expect(checkValidity(input)).toBe(expected);
})

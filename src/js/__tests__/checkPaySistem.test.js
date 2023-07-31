import checkPaySystem from "../checkPaySystem";

test.each([
    ['should return visa for visa number', '4916946690523674', 'visa'],
    ['should return mastercard for mastercard number', '5195983518013728', 'mastercard'],
    ['should return mir for mir number', '2204004590619120', 'mir'],
    ['should return ae for american express card number', '340550553815872', 'ae']
])(('should return name of paysystem'), (_, input, expected) => {
    expect(checkPaySystem(input)).toBe(expected);
})
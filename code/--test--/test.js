// sum.test.js
const sum = require('../code');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);  // Ki?m tra xem h�m sum c� tr? v? 3 khi c?ng 1 v� 2 kh�ng
});

test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);  // Ki?m tra xem h�m sum c� tr? v? 0 khi c?ng -1 v� 1 kh�ng
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);  // Ki?m tra xem h�m sum c� tr? v? 0 khi c?ng 0 v� 0 kh�ng
});

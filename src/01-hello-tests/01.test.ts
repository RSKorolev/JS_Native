import { sum } from './01';
import { mult } from './01';
import { splitIntoWords } from './01';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});

test('sum should be correct', () => {
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    expect(result1).toBe(3);
    expect(result2).toBe(4);
});

test('multiply should be correct', () => {
    const result1 = mult(a, b);
    const result2 = mult(a, c);

    expect(result1).toBe(2);
    expect(result2).toBe(3);
});

test('splitting into words should be correct', () => {
    const sentence1 = 'Hello my friend!';
    const sentence2 = 'JS - the programming language';

    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('programming');
    expect(result2[3]).toBe('language');
});

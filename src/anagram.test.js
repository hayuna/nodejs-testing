const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function')
})

test('"cinema" is an anagram of "ice man"', () => {
    expect(isAnagram('cinema', 'ice man')).toBeTruthy()
})

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy()
})
function letterCombinations(input_digit) {
  const digitMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const combinations = [];

  function backtrack(current, nextDigits) {
    if (nextDigits.length === 0) {
      // No more digits to process, add current combination
      combinations.push(current);
    } else {
      const digit = nextDigits[0];
      const letters = digitMap[digit];

      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        backtrack(current + letter, nextDigits.slice(1));
      }
    }
  }

  if (input_digit) {
    backtrack('', input_digit);
  }

  return combinations;
}


module.exports = letterCombinations;

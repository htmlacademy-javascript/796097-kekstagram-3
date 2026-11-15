const isStrLen = (str, maxLength) => (str.length <= maxLength);
window.console.log('isStrLen', isStrLen('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
window.console.log('isStrLen', isStrLen('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
window.console.log('isStrLen', isStrLen('проверяемая строка', 10)); // false

const isStringPalindromic = (str) => {
  const formatStr = str.toLowerCase().replaceAll(' ', '');
  let reverseStr = '';

  for (let i = formatStr.length - 1; i >= 0; i--) {
    reverseStr += formatStr[i];
  }
  return (reverseStr === formatStr);
};

window.console.log('isStringPalindromic', isStringPalindromic('Лёша на полке клопа нашёл '));



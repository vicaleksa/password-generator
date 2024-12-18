const CHARS_IN_UPPERCASE = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;
const CHARS_IN_LOWERCASE = 'z'.charCodeAt() - 'a'.charCodeAt() + 1;
const CHARS_IN_NUMBERS = '9'.charCodeAt() - '0'.charCodeAt() + 1;
const CHARS_IN_SYMBOLS = '/'.charCodeAt() - '!'.charCodeAt() + 1
    + '@'.charCodeAt() - ':'.charCodeAt() + 1
    + '`'.charCodeAt() - '['.charCodeAt() + 1
    + '~'.charCodeAt() - '{'.charCodeAt() + 1;

const getPasswordComplexity = (length, uppercase, lowercase, numbers, symbols) => {
    let charSet = 0;
    if (uppercase) {
        charSet += CHARS_IN_UPPERCASE;
    }
    if (lowercase) {
        charSet += CHARS_IN_LOWERCASE;
    }
    if (numbers) {
        charSet += CHARS_IN_NUMBERS;
    }
    if (symbols) {
        charSet += CHARS_IN_SYMBOLS;
    }

    const passwordEntropy = length * Math.log2(charSet);

    if (passwordEntropy <= 28) {
        return 'Too weak!';
    }
    if (passwordEntropy > 28 && passwordEntropy <= 35) {
        return 'Weak';
    }
    if (passwordEntropy > 35 && passwordEntropy <= 60) {
        return 'Medium';
    }
    return 'Strong';
};

export default getPasswordComplexity;

const getRandomChar = (uppercase, lowercase, numbers, symbols) => {
    const charSets = [];
    if (uppercase) {
        charSets.push([65, 90]);
    }
    if (lowercase) {
        charSets.push([97, 122]);
    }
    if (numbers) {
        charSets.push([48, 57]);
    }
    if (symbols) {
        charSets.push([33, 47], [58, 64], [91, 96], [123, 126]);
    }
    const charSet = charSets[Math.floor(Math.random() * charSets.length)];
    const charCode = Math.floor(Math.random() * (charSet[1] - charSet[0] + 1) + charSet[0]);
    return String.fromCharCode(charCode);
}

const generatePassword = (length, uppercase, lowercase, numbers, symbols) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        password = password + getRandomChar(uppercase, lowercase, numbers, symbols);
    }
    return password;
}

export default generatePassword;

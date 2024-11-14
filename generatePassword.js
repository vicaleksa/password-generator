function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const getRandomChar = () => {
        const charSets = []
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
            charSets.push([33, 47], [91, 96]);
        }

        const charSet = charSets[Math.floor(Math.random() * charSets.length)];
        const charCode = Math.floor(Math.random() * (charSet[1] - charSet[0] + 1) + charSet[0]);
        return String.fromCharCode(charCode);
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password = password + getRandomChar();
    }

    return password;
}

// console.log(generatePassword(5, true, true, true, true))

const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
};

export default copyTextToClipboard;

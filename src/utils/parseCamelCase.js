export default (phrase) => {
    const spacedPhrase =
        phrase
            .replace(/[A-Z]/g, letter => ` ${letter}`)
            .toLowerCase();

    return spacedPhrase;
};

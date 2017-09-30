export default (phrase) => {
    const parsedPhrase = phrase.replace(/[A-Z]/g, letter => ` ${letter}`);

    parsedPhrase[0].toUpperCase();

    return parsedPhrase;
};

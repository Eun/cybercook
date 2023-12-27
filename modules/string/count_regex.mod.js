module = {
    name: 'count regex',
    description: 'count the matches of the specified regex in the input',
    categories: ['string'],
    properties: [
        {
            name: 'Regex',
            type: 'text',
            default: '.'
        },
    ],
    run: async function (text, regex) {
        const regexObj = new RegExp(regex, 'g');
        const matches = text.match(regexObj);
        return matches ? matches.length : 0;
    }
}

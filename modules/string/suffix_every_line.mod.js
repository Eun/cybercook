module = {
    name: 'suffix every line',
    description: 'suffix every line in the input',
    categories: ['string', 'every_line'],
    properties: [
        {
            name: 'Suffix',
            type: 'text',
            default: ''
        },
    ],
    run: async function (text, suffix) {
        return text.replaceAll("\n", suffix + "\n") + suffix;
    }
}

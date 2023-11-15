module = {
    name: 'suffix every line',
    description: 'suffix every line in the input',
    categories: ['string'],
    properties: [
        {
            name: 'Suffix',
            type: 'text',
            default: ''
        },
    ],
    run: function (text, suffix) {
        return text.replaceAll("\n", suffix + "\n") + suffix;
    }
}

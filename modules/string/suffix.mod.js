module = {
    name: 'suffix',
    description: 'suffix the input with a given string',
    categories: ['string'],
    properties: [
        {
            name: 'Suffix',
            type: 'text',
            default: ''
        },
    ],
    run: function (text, suffix) {
        return text + suffix;
    }
}

module = {
    name: 'suffix',
    description: 'suffix a string',
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

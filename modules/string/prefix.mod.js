module = {
    name: 'prefix',
    description: 'prefix a string',
    categories: ['string'],
    properties: [
        {
            name: 'Prefix',
            type: 'text',
            default: ''
        },
    ],
    run: function (text, prefix) {
        return prefix + text;
    }
}

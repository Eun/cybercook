module = {
    name: 'prefix',
    description: 'prefix the input with a given string',
    categories: ['string'],
    properties: [
        {
            name: 'Prefix',
            type: 'text',
            default: ''
        },
    ],
    run: async function (text, prefix) {
        return prefix + text;
    }
}

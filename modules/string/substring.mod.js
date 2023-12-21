module = {
    name: 'substring',
    description: 'extract a substring',
    categories: ['string'],
    properties: [
        {
            name: 'Start',
            type: 'number',
            default: 0
        },
        {
            name: 'End',
            type: 'number',
            optional: true,
            enabled_on_default: false,
            default: 1000
        },
    ],
    run: async function (text, start, end) {
        return text.substring(start, end);
    }
}

module = {
    name: 'prefix every line',
    description: 'prefix every line in a string',
    categories: ['string', 'every_line'],
    properties: [
        {
            name: 'Prefix',
            type: 'text',
            default: ''
        },
    ],
    run: async function (text, prefix) {
        return prefix + text.replaceAll("\n", "\n" + prefix);
    }
}

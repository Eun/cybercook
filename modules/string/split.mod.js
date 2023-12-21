module = {
    name: 'split',
    description: 'split a text by the specified delimiter and join it again with the join delimiter',
    categories: ['string'],
    properties: [
        {
            name: 'Split delimiter',
            type: 'text',
            default: ','
        },
        {
            name: 'Join delimiter',
            type: 'text',
            default: '.'
        },
    ],
    run: async function (text, split_delimiter, join_delimiter) {
        return text.split(split_delimiter).join(join_delimiter);
    }
}

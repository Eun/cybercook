module = {
    name: 'JSON Beautify',
    description: 'beautify and pretty print a json object',
    categories: ['json'],
    properties: [
        {
            name: 'Space',
            type: 'number',
            default: '2'
        }
    ],
    run: function (text, space) {
        return JSON.stringify(JSON.parse(text), null, parseInt(space));
    }
}

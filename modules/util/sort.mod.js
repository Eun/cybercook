module = {
    name: 'sort',
    description: 'sort the input seperated by delimiter',
    categories: ['util'],
    properties: [
        {
            name: 'Delimiter',
            type: 'text',
            default: '\\n'
        },
        {
            name: 'Order',
            type: 'selection',
            default: 'Alphabetical (case sensitive)',
            options: ['Alphabetical (case sensitive)', 'Alphabetical (case insensitive)', 'Length']
        },
        {
            name: 'Reverse',
            type: 'boolean',
            default: false,
        },
    ],
    run: async function (text, delimiter, order, reverse) {
        let parts = text.split(delimiter);
        switch (order) {
            case 'Alphabetical (case sensitive)':
                parts.sort();
                break;
            case 'Alphabetical (case insensitive)':
                parts.sort(function(a, b) {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                });
                break;
            case 'Length':
                parts.sort(function(a, b) {
                    return a.length - b.length;
                });
                break;
            default:
                throw new Error(`Invalid sorting method (${order})`);
        }
        if (reverse) {
            parts.reverse();
        }
        return parts.join(delimiter);
    }
}

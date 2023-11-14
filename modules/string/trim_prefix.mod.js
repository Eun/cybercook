module = {
    name: 'trim white spaces',
    description: 'trim white spaces on start or end of string',
    categories: ['string'],
    properties: [
        {
            name: 'Trim on start',
            type: 'boolean',
            default: true,
        },
        {
            name: 'Trim on end',
            type: 'boolean',
            default: true,
        },
        {
            name: 'Trim every line',
            type: 'boolean',
            default: true,
        },
    ],
    run: function (text, start, end, every_line) {
        if (every_line) {
            text = text.split("\n").map(x => {
                if (start && end) {
                    return x.trim();
                }
                if (start) {
                    x = x.trimStart();
                }
                if (end) {
                    x = x.trimStart();
                }
                return x;
            }).join("\n");
        }
        if (start && end) {
            return text.trim();
        }
        if (start) {
            text = text.trimStart();
        }
        if (end) {
            text = text.trimStart();
        }
        return text;
    }
}

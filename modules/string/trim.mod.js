module = {
    name: 'trim',
    description: 'trim start and end of input for special characters',
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
        {
            name: 'Characters to trim',
            type: 'text',
            default: '',
        },
    ],
    run: async function (text, start, end, every_line, chars) {
        const trimLeft = function (s) {
            for (let i = 0; i < s.length; i++) {
                const char = s.charAt(i);
                let remove = false;
                for (let j = 0; j < chars.length; j++) {
                    if (char === chars.charAt(j)) {
                        remove = true;
                        break;
                    }
                }
                if (!remove) {
                    return s.substring(i);
                }
            }
        }

        const trimRight = function (s) {
            for (let i = s.length - 1; i >= 0; i--) {
                const char = s.charAt(i);
                let remove = false;
                for (let j = 0; j < chars.length; j++) {
                    if (char === chars.charAt(j)) {
                        remove = true;
                        break;
                    }
                }
                if (!remove) {
                    return s.substring(0, i);
                }
            }
        }


        if (every_line) {
            text = text.split("\n").map(x => {
                if (start) {
                    x = trimLeft(x);
                }
                if (end) {
                    x = trimRight(x);
                }
                return x;
            }).join("\n");
        }
        if (start) {
            text = trimLeft(text);
        }
        if (end) {
            text = trimRight(text);
        }
        return text;
    }
}

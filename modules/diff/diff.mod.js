module = {
    name: 'diff',
    description: 'create a diff between the input and the specified text',
    categories: ['string'],
    properties: [
        {
            name: 'Compare Text',
            type: 'text',
            default: 'Text'
        },
        {
            name: 'Mode',
            type: 'selection',
            default: 'characters',
            options: ['characters', 'words', 'lines', 'patch']
        },
    ],
    onload: async function() {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'modules/diff/diff.js';

            script.onload = script.onreadystatechange = function() {
                script.onreadystatechange = script.onload = null;
                resolve();
            };

            document.body.append(script);
        });
    },
    run: async function (text, compareText, mode) {
        if (mode === 'patch') {
            // We contort the patch into a similar data structure to that returned by diffChars,
            // diffWords, etc so that the same rendering code below can work on both.
            var pastHunkHeader = false;
            diff = Diff.createTwoFilesPatch('input.txt', 'compare.txt', text, compareText)
                .split('\n')
                .map(function(entry) {
                    const result = {
                        value: entry + '\n',
                    };
                    if (entry.startsWith('@@')) {
                        result.chunkHeader = true;
                        pastHunkHeader = true;
                    } else if (pastHunkHeader) {
                        if (entry.startsWith('-')) {
                            result.removed = true;
                        } else if (entry.startsWith('+')) {
                            result.added = true;
                        }
                    }
                    return result;
                });
        } else if (mode === 'characters') {
            diff = Diff['diffChars'](text, compareText);
        } else if (mode === 'words') {
            diff = Diff['diffWords'](text, compareText);
        } else if (mode === 'lines') {
            diff = Diff['diffLines'](text, compareText);
        } else {
            throw new Error(`Invalid diff mode (${mode})`);
        }

        const fragment = document.createElement('div');
        let output = '';
        for (let i=0; i < diff.length; i++) {
            if (diff[i].added && diff[i + 1] && diff[i + 1].removed) {
                let swap = diff[i];
                diff[i] = diff[i + 1];
                diff[i + 1] = swap;
            }

            let node;
            if (diff[i].removed) {
                node = document.createElement('del');
                node.appendChild(document.createTextNode(diff[i].value));
            } else if (diff[i].added) {
                node = document.createElement('ins');
                node.appendChild(document.createTextNode(diff[i].value));
            } else if (diff[i].chunkHeader) {
                node = document.createElement('span');
                node.setAttribute('class', 'chunk-header');
                node.appendChild(document.createTextNode(diff[i].value));
            } else {
                node = document.createTextNode(diff[i].value);
            }
            fragment.appendChild(node);
        }

        return fragment.innerHTML;
    }
}

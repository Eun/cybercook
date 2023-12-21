module = {
    name: 'jq',
    description: 'filter a json object with jq',
    categories: ['json'],
    properties: [
        {
            name: 'Expression',
            type: 'text',
            default: '.'
        },
    ],
    onload: async function() {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'modules/jq/jq.wasm.js';

            script.onload = script.onreadystatechange = function() {
                script.onreadystatechange = script.onload = null;
                resolve();
            };

            document.body.append(script);
        });
    },
    run: async function (text, expr) {
        const result = await jq.promised.raw(text, expr);
        console.log(result);
        return result;
    }
}

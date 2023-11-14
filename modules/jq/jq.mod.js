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
    onload: function (done) {
        const script = document.createElement('script');
        script.src = 'modules/jq/jq.wasm.js';
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            done();
        }
        document.body.append(script);
    },
    run: function (text, expr) {
        return jq.raw(text, expr);
    }
}

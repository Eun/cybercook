module = {
    name: 'fetch',
    description: 'fetch a url',
    categories: ['net'],
    properties: [
        {
            name: 'URL',
            type: 'text',
            default: 'https://example.com'
        },
        {
            name: 'Method',
            type: 'selection',
            default: 'GET',
            options: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH']
        },
        {
            name: 'CORS',
            type: 'selection',
            default: 'cors',
            options: ['cors', 'no-cors']
        },
        {
            name: 'Body to send',
            type: 'text',
            default: '',
            optional: true,
            enabled_on_default: false,
        },
        {
            name: 'Headers',
            type: 'text',
            default: '{}',
        },
    ],
    run: async function (str, url, method, cors, body, headers) {
        if (headers === undefined || headers === '') {
            headers = '{}'
        }
        const response = await fetch(url, {
            method: method,
            mode: cors,
            cache: "no-cache",
            credentials: "same-origin",
            headers: JSON.parse(headers),
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: body,
        });
        return JSON.stringify({
            status: response.status,
            body: await response.text(),
            headers: response.headers,
        });
    }
}

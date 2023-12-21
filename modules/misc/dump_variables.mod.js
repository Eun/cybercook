module = {
    name: 'dump variables',
    description: 'dump all known variables',
    categories: ['misc'],
    properties: [],
    run: async function (str) {
        return JSON.stringify(window.__cybercook_variables);
    }
}

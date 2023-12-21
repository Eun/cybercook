module = {
    name: 'crc32',
    description: 'hash with crc32',
    categories: ['hash', 'crc32'],
    properties: [],
    onload: async function() {
        return new Promise((resolve) => {
            let c;
            window.crcTable = [];
            for(let n =0; n < 256; n++){
                c = n;
                for(var k =0; k < 8; k++){
                    c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
                }
                window.crcTable[n] = c;
            }
            resolve();
        });
    },
    run: async function (text) {
        let crc = 0 ^ (-1);
        for (let i = 0; i < text.length; i++ ) {
            crc = (crc >>> 8) ^ window.crcTable[(crc ^ text.charCodeAt(i)) & 0xFF];
        }
        return `${(crc ^ (-1)) >>> 0}`;
    }
}

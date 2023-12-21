module = {
    name: 'crc16',
    description: 'hash with crc16',
    categories: ['hash', 'crc16'],
    properties: [],
    run: async function (text){
        var crc = 0xFFFF;
        var odd;

        for (var i = 0; i < text.length; i++) {
            crc = crc ^ text[i];

            for (var j = 0; j < 8; j++) {
                odd = crc & 0x0001;
                crc = crc >> 1;
                if (odd) {
                    crc = crc ^ 0xA001;
                }
            }
        }

        return crc.toString();
    }
}

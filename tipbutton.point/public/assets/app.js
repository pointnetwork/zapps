async function tipMe() {
    await window.point.wallet.send({
        to:  '0xd81611af5b8a422aefa515d2f28ae241a6c64d66',
        network: 'local',
        value: '0x2386f26fc10000'
    });
};
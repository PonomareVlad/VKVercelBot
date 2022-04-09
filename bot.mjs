import {API, Upload, Updates} from 'vk-io';

const api = new API({token: process.env.TOKEN});

const upload = new Upload({api});

const updates = new Updates({api, upload});

updates.on('message', (context) => {
    console.debug(context)
});

export default updates;

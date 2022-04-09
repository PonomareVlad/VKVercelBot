import {API, Upload, Updates} from 'vk-io';

const api = new API({token: process.env.TOKEN});

export default new Updates({api, upload: new Upload({api})})
    .on('message', async context => await context.send(context.text));

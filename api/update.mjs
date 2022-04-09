import bot from '../bot.mjs'

export default async ({body}, {json}) => json(body ? await bot.handleWebhookUpdate(body) : {status: false})

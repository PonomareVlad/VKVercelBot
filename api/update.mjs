import bot from '../bot.mjs'

export default async ({body}, {json, send}) => {
    if (!body) return json({status: false})
    if (body?.type === 'confirmation') return send(process.env.CONFIRMATION)
    return json(await bot.handleWebhookUpdate(body) || {status: true})
}

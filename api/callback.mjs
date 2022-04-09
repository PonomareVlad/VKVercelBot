import bot from '../bot.mjs'

export default async ({body}, {send}) => {
    if (!body) return send('Empty body')
    if (body?.type === 'confirmation') return send(process.env.CONFIRMATION)
    return send(await bot.handleWebhookUpdate(body).then(() => 'ok'))
}

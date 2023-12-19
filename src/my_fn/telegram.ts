
const tg_chat_id = process.env.telegram_group
const tg_token = process.env.telegram_token
const { Bot } = require("grammy")
const bot = new Bot(tg_token); 
export async function telegram_send(text: string) {
    try {
        bot.api.sendMessage(tg_chat_id, text)
    } catch (error) {
        console.log('telegram error')
        console.log(error)
    }

}
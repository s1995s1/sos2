let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*Я НЕ МОГУ УДАЛИТЬ ТЕБЯ, ТЫ АДМИН*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 АНТИССЫЛКА 」*\n*${await this.getName(m.sender)} ДО ВСТРЕЧИ :)*${isBotAdmin ? '' : '\n\n*[❗ИНФО❗] БОТ ДОЛЖЕН БЫТЬ АДМИНОМ*'}`, author, ['ОТКЛЮЧИТЬ АНТИССЫЛКУ', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗ИНФО❗] У ВЛОДЕЛЬЦА БОТА НЕ ВКЛЮЧЕНЫ ОГРАНИЧЕНИЯ (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) СВЯЖИТЕСЬ С НИМ. ЧТОБЫ ВКЛЮЧИТЬ ЕГО*')
}
return !0
}

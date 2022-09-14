let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*ЭЙ!! НЕ КИДАЙ БОЛЬШЕ. Я НЕ МОГУ ТЕБЯ УДАЛИТЬ 😎, ЖИВИ И МУЧЕЙСЯ!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 АНТИ ССЫЛКА 」*\n*ДО СКОРОЙ ВСТРЕЧИ 👋, ${await this.getName(m.sender)} ВЫ НАРУШАЕТЕ ПРАВИЛА ГРУППЫ, ВЫ БУДЕТЕ УДАЛЕНЫ...!!*${isBotAdmin ? '' : '\n\n*[❗ИНФО❗] Я БОТ АДМИН, И МОГУ УДАЛЯТЬ ЛЮДЕЙ*'}`, author, ['ВЫКЛЮЧЯИТЬ АНТИССЫЛКУ', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗ИНФО❗] У ВЛАДЕЛЬЦА БОТА НЕ ВКЛЮЧЕНЫ ОГРАГРАНИЧЕНИЯ ОН ВКЛЮЧИТ ФУНКЦЫЮ(#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) ПОЗОВИТЕ ВЛАДЕЛЬЦА БОТА*')
}
return !0
}

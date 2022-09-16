global.fakes = ['212' || '265' || '92' || '84' || '62' || '7' || '213' || '48' || '371' || '98' || '377']

let handler = m => m
handler.before = async function (m, { isBotAdmin, isROwner, isOwner, isAdmin }) {
  
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}  
  
if (m.sender.startsWith(global.fakes) && isBotAdmin && !isROwner && !isOwner && !isAdmin && chat.antifakes && bot.restrict) {
this.reply('В этой группе активирован антифейк, извините, вас исключат.. ваш номер выглядит несколько фальшивым 😄')
this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  
}}
export default handler

let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `Вы можете удалять только назначенные команды из стикеров`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw 'У вас нет разрешения на удаление этой команды стикера'
delete sticker[hash]
m.reply(`*[ ✔ ] Hecho!*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler

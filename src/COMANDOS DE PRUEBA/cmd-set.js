let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw 'Назначьте команду для стикера, используя .setcmd + команду '
if (!m.quoted.fileSha256) throw 'Вы можете назначить стикерам/фотографиям только одну команду'
if (!text) throw `Uso:\n${usedPrefix + coommand} <texto>\n\nEjemplo:\n${usedPrefix + command} prueba`
let sticker = db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw 'У вас нет разрешения изменять эту команду стикеров.'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false, }
m.reply(`✅Hecho!`)}
handler.command = ['setcmd']
handler.rowner = true
export default handler

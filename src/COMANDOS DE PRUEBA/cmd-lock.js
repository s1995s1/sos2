let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!m.quoted) throw '✳️ Ответить на сообщение'
if (!m.quoted.fileSha256) throw 'Отсутствует хэш SHA256'
let sticker = db.data.sticker
let hash = m.quoted.fileSha256.toString('hex')
if (!(hash in sticker)) throw 'Он не зарегистрирован в базе данных'
sticker[hash].locked = !/^un/i.test(command)
m.reply('*[ ✔ ] Hecho!*')} 
handler.command = ['unlockcmd', 'lockcmd'] 
handler.rowner = true
export default handler
